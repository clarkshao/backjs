var setting = {
    'index':true,
    'step0':false,
    'step1':true,//可忽略
    'step2':false,
    'step3':true//可忽略
}

var sessionData = (key , value)=>{
    var tmp

    if(value){
        try{
            value = JSON.stringify(value)
        }catch(e){
        }
        sessionStorage.setItem(key,value)
    }

    else{
        tmp = sessionStorage.getItem(key)
        try{
            tmp = JSON.parse(tmp)
        }catch(e){
        }
        return tmp
    }

}

var historyPath = sessionData('HISTORY_PATH')

var href = location.href

if(!historyPath){
    sessionData('HISTORY_PATH',[href])
}
else{
    var index = historyPath.indexOf(href)
    var len = historyPath.length
    if(index == -1){
        historyPath.push(href)
    }
    else{
        historyPath.splice(index+1)
    }
    sessionData('HISTORY_PATH',historyPath)
}

var findPath = (full) =>{
    var list = full.match(new RegExp(location.host + '(.*?)(?=.html)'),'')
    if(list && list[1]){
        return list[1].replace(/^\//g,'')
    }
}

var back = () =>{
    console.time('back tracer')
    var store,path
    historyPath.pop()
    do{
        store = historyPath.pop()
        path = store && findPath(store)
    }
    //明确设置为false时才会跳过，可以不设置啊
    while(setting[path] === false)

    if(store && store != location.href){
        location.href = store
    }
    console.timeEnd('back tracer')
}
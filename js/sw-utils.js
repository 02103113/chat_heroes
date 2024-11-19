

function actualizaCacheDinamico(dynamicCache, req, res){
    if (res.ok){
        return caches.open(dynamicCache).then(cache=>{
            cache.put(req, res.clone());
            return res.clone();
        }); // Cierre del then
    } // Cierre del if
    else{
        return res;
    }
    
} // Cierre de la funcion

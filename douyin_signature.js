function make_signature(input){
    function str_loop(str, k){
        for(var i = 0; i < str.length; i++){
            k = (65599 * k + str.charCodeAt(i) >>> 0)
        }
        return k
    }
    
    function char_loop(str){
        offset = 24
    
        for(;;){
            v = (str >> offset) & 63
            if (v < 26){
                c =  String.fromCharCode(v + 65)
                signature += c
            }else if(v < 52){
                c = String.fromCharCode(v + 71)
                signature += c
            }else if(v < 62){
                c = String.fromCharCode(v - 4)
                signature += c
            }else{
                c = String.fromCharCode(v - 17)
                signature += c
            }
        
            offset -= 6
            if(offset < 0){
                return v
            }
        }
    }
    
    
    signature = ''
    ts = new Date() / 1000;
    ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
    
    constNum = 65521;
    v0 = ts % constNum;
    v1 = ((ts ^ (v0 * constNum)) >>> 0) + ''
    v2 = (((v1 / 4294967296) << 16) | v0)
    k0 = str_loop(v1, 0)
    
    tmp = v1 >> 2 
    char_loop(tmp)
    
    tmp1 = v1 << 28
    tmp2 = (v2 >>> 4)
    tmp = tmp1 | tmp2
    char_loop(tmp)
    
    tmp1 = v2 << 26
    tmp2 = (-1 ^ v1) >>> 6
    tmp = tmp1 | tmp2
    char_loop(tmp)
    
    k1 = str_loop(input, k0)
    tmp1 = k1 % constNum
    
    k2 = k0
    k2 = str_loop(ua, k2)
    tmp2 = (k2 % constNum) << 16
    
    v40 = tmp1 | tmp2
    tmp = v40 >> 2
    char_loop(tmp)
    
    tmp1 = v40 << 28
    tmp2 = (((0 << 8) | 16) ^ v1) >>> 4
    tmp = tmp1 | tmp2
    char_loop(tmp)
    
    return signature
}

console.log(make_signature('e99p1ant'))
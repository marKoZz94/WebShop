export const encodeData = (data: any) => {
    return Object.keys(data).map(function(key) {
        return data[key] ? [key, data[key]].map(encodeURIComponent).join("=") : false;
    }).filter(Boolean).join('&');
}   
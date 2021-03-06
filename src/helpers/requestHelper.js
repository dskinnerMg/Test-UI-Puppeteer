export const RequestHelper = {
    promiseResponseByUrl: ( page, url ) => {
        return new Promise( function( resolve ){
            page.on('response', response => {
                if (response.url().endsWith(url))
                    console.log("request promise fulfilled");
                    resolve(response);
            });
        })
    }
}

export default RequestHelper
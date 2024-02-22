
const foodOpenApiBaseURL = 'http://openapi.foodsafetykorea.go.kr/api/2ae0203501ef4af5a8b7/C005/json/1/1/BAR_CD=';

export const fetchProductDetail = async (barcode) => {
        detail = await fetch(`${foodOpenApiBaseURL}${barcode}`)
          .then(response => response.json())
          .then(json => { 
              const content = json.C005.row[0];
              console.log(content);
              return detail = `${content.PRDLST_NM} ${content.BSSH_NM} ${content.POG_DAYCNT}`
          })
          .catch(error => {
            console.error(error);
            detail = 'error'
          })
    
          return detail;
    }    



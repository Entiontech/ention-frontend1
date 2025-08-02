export const orderConfimTemplate = ({order, products, total}) => {
    return `
    <html>
    <head>

    </head>
    <body>
        <div style="width: 100%; padding: '10px';  text-align:center;  color:black; ">
            <div style="flex: 1; text-align:center; margin-Top: 40;">
                <h1 style="font-size:xx-large; color:black; "><b>Ention Technology and Service Private Limited </b></h1>
            </div>
            <hr  />
            <p style="margin-top: 20; margin-bottom: 20;">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 512 512" id="IconChangeColor"><path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:rgb(157, 156, 156);stroke-miterlimit:10;stroke-width:32px" id="mainIconPathAttribute" fill="#737373" stroke="#d0cdcd"></path><polyline points="352 176 217.6 336 160 272" style="fill:none;stroke:rgb(154, 152, 152);stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></polyline></svg>
            </p>
            <h4 style="font-size:xx-large;  "><b>Thank you for placing your order with our store!</b></h4>
            <p style="margin-top: 20; font-size:x-large; margin-bottom: 20;"> This email is to confirm your recent order</p>
            <br />
            <p style="font-size:x-large;"> Order Id: <b>${order.id}</b> </p>
            <br />
            <br />
            ${
                products && products.length ? `
                    <table style=" text-align:center;  margin-left: auto; margin-right: auto;  font-size:x-large;  ">
                        <tr style="background-color:#000; ">
                            <th style="text-align:center; font-size:x-large; color:#fff; padding-top:20; padding-bottom:20; padding-left: 180; padding-right: 180; width: 80%; "> Product </th>
                        </tr>
                        ${
                            products?.map(product => `<tr >
                                <td style="padding-top:20; padding-bottom:20; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; background-color: #a6a9ab;"> ${product.title} </td>
                            </tr>`)
                        }
                    </table>
                ` : ''
            }
            <tr>
                <td style="padding-top:20; padding-bottom:20;font-size:xx-large; font-weight: bold; border-top-color: rgb(113, 112, 112); border-bottom: rgb(133, 131, 131); border-bottom-width: medium; border-bottom-style: solid;
                border-top-width: medium; border-top-style: solid;">Total</td>
                <td style="padding-top:20; padding-bottom:20; border-top-color: rgb(113, 112, 112); border-bottom: rgb(133, 131, 131); border-bottom-width: medium; border-bottom-style: solid;
                border-top-width: medium; border-top-style: solid;"> ${total.toLocaleString('en-IN')}
                </td>
            </tr>
            <br />
            <br />
            <p  style=" ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="44" width="44"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="IconChangeColor" height="44" width="44"> <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" id="mainIconPathAttribute"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="44" width="44"><path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"/></svg>
            </p>

            <p style="font-size:medium; padding-top:20; padding-bottom:20; font-size:x-large;">This email was sent by Ention.<br/>
                To ensure deliver to your inbox (not bulk or junk folder), you can add ention to your address book or safe list.
            </p>
        </div>
    </body>
    </html>
    `
}

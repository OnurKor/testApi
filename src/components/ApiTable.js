import React, { useState } from 'react'
import data from '../data/TestApi'
import axios from 'axios'

const headers = [
    "id",
    "hesap_kodu",
    "hesap_adi",
    "tipi",
    "ust_hesap_id",
    "borc ",
    "alacak",
    "borc_sistem",
    "alacak_sistem",
    "borc_doviz",
    "alacak_doviz",
    "borc_islem_doviz",
    "alacak_islem_doviz",
    "birim_adi",
    "bakiye_sekli",
    "aktif",
    "dovizkod"
]


const ApiTable = ({ token }) => {

    const main = data?.filter(item => item?.hesap_kodu?.length < 8)

    const [apiData, setApiData] = useState(null)

    const handleFetchData = () => {
        setApiData("data")


        var axios = require('axios');
        var data = JSON.stringify({
          "fieldData": {},
          "script": "getData"
        });
        
        var config = {
          method: 'patch',
          url: 'https://efatura.etrsoft.com/fmi/data/v1/databases/testdb/layouts/testdb/records/1',
          headers: { 
            'Content-Type': 'application/json', 
            'Authorization': 'Bearer 8f6e231b6f7622f2512d6b87522960b36345673bbf9ec89df5ea'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });

    }


    if (!apiData) {

        return (
            <div
            style={{
                margin: 'auto',
                width: '100%',
                textAlign: 'center',
                paddingTop: '50px',
                paddingBottom: '50px',
              }}
            >
                <button className="btn btn-warning" onClick={handleFetchData}>
                    Verileri çek
                </button>
            </div>
        )
    }


    return (
        <div style={{ padding: '10px', }} >

            <div className="panel-heading">
                Table
            </div>

            <div
                className="table-responsive"
                style={{
                    width: '100%',
                    overflow: 'auto',
                    maxHeight: '1200px',
                }}

            >

                <table className="table ">

                    <thead>
                        <tr>
                            {
                                headers?.map((column, index) => (
                                    <td
                                        key={index}
                                        style={{
                                            backgroundColor: index % 2 === 0 ? '#ddd' : '#fff',
                                            paddingLeft: '8px',
                                            paddingRight: '15px',
                                            // paddingTop: '10px',
                                            fontSize: '14px'
                                        }}
                                    >
                                        {column}
                                    </td>
                                ))
                            }
                        </tr>
                    </thead>

                    <tbody >

                        {
                            main?.map((item, index) => {

                                const subData = data?.filter(i => i?.hesap_kodu?.startsWith(item?.hesap_kodu?.trim()) && i?.hesap_kodu?.length > 7)

                                return (
                                    <>
                                        <tr style={{ backgroundColor: '#fffcad', fontSize: '15px', textAlign:"center"}} key={index} data-bs-toggle="collapse" href={`#demo${index}`} role="button" aria-expanded="false" aria-controls={`demo${index}`}>
                                            <td className="bg-success"><button className="btn btn-default btn-xs">{item.id}</button></td>
                                            <td className="bg-muted">{item?.hesap_kodu}</td>
                                            <td className="bg-info">{item?.hesap_adi}</td>
                                            <td className="bg-muted">{item?.tipi}</td>
                                            <td className="bg-info">{item?.ust_hesap_id}</td>
                                            <td className="bg-muted">{item?.borc}</td>
                                            <td className="bg-info">{item?.alacak}</td>
                                            <td className="bg-muted">{item?.borc_sistem}</td>
                                            <td className="bg-info">{item?.alacak_sistem}</td>
                                            <td className="bg-muted">{item?.borc_doviz}</td>
                                            <td className="bg-info">{item?.alacak_doviz}</td>
                                            <td className="bg-muted">{item?.borc_islem_doviz}</td>
                                            <td className="bg-info">{item?.alacak_islem_doviz}</td>
                                            <td className="bg-muted">{item?.birim_adi}</td>
                                            <td className="bg-info">{item?.bakiye_sekli}</td>
                                            <td className="bg-muted">{item?.aktif}</td>
                                            <td className="bg-info">{item?.dovizkod}</td>
                                        </tr>

                                        <tr className="hiddenRow">
                                            <td colSpan="17" >
                                                <div className="accordian-body collapse" id={`demo${index}`}>
                                                    <table className="table table-striped">

                                                        <thead className="sticky-top">
                                                            <tr>
                                                                {
                                                                    headers?.map((column, index) => (
                                                                        <td
                                                                            key={index}
                                                                            style={{
                                                                                backgroundColor: index % 2 === 0 ? '#ddd' : '#fff',
                                                                                paddingLeft: '8px',
                                                                                paddingRight: '8px',
                                                                                fontSize: '12px',
                                                                            }}
                                                                        >
                                                                            {column}
                                                                        </td>
                                                                    ))
                                                                }
                                                            </tr>
                                                        </thead>
                                                        <tbody style={{}}>

                                                            {
                                                                subData?.map((subItem, index2) => {

                                                                    
                                                                    return (
                                                                        <>
                                                                            <tr style={{ backgroundColor: '#fffcad', fontSize: '13px', textAlign: "center"}} key={`sub${index}${index2}`} data-bs-toggle="collapse" href={`#demo${index}${index2}`} role="button" aria-expanded="false" aria-controls={`demo${index}${index2}`}>
                                                                                <td   style={{ backgroundColor: '#acffc7' }}><button className="btn btn-default btn-xs">{subItem.id}</button></td>
                                                                                <td className="bg-muted">{subItem?.hesap_kodu}</td>
                                                                                <td className="bg-info hesap">{subItem?.hesap_adi}</td>
                                                                                <td className="bg-muted">{subItem?.tipi}</td>
                                                                                <td className="bg-info">{subItem?.ust_hesap_id}</td>
                                                                                <td className="bg-muted">{subItem?.borc}</td>
                                                                                <td className="bg-info">{subItem?.alacak}</td>
                                                                                <td className="bg-muted">{subItem?.borc_sistem}</td>
                                                                                <td className="bg-info">{subItem?.alacak_sistem}</td>
                                                                                <td className="bg-muted">{subItem?.borc_doviz}</td>
                                                                                <td className="bg-info">{subItem?.alacak_doviz}</td>
                                                                                <td className="bg-muted">{subItem?.borc_islem_doviz}</td>
                                                                                <td className="bg-info">{subItem?.alacak_islem_doviz}</td>
                                                                                <td className="bg-muted">{subItem?.birim_adi}</td>
                                                                                <td className="bg-info">{subItem?.bakiye_sekli}</td>
                                                                                <td className="bg-muted">{subItem?.aktif}</td>
                                                                                <td className="bg-info">{subItem?.dovizkod}</td>
                                                                            </tr>

                                                                        </>
                                                                    )
                                                                })
                                                            }


                                                        </tbody>

                                                    </table>
                                                </div>
                                            </td>
                                        </tr>

                                    </>
                                )
                            })

                        }


                    </tbody>

                </table>

            </div>
        </div>
    )
}

export default ApiTable
import React,{useState,useEffect} from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
export default function Chart({data:{ confirmed, recovered, deaths, lastUpdated },country}) {

    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        const fetchApi = async () => {
            setDailyData(await fetchDailyData());
        }
        // console.log(dailyData)
        fetchApi();
    },[])
    
    const lineChart = (
        dailyData.length ? (<Line
            data={{
                labels: dailyData.map(({date}) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill:true,
                },{
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor:'rgba(255,0,0,0.5)',
                    fill:true,
                }]
            }}
        />): (<div class="d-flex justify-content-center"><div class="spinner-border text-primary"></div></div>)
    );


    const barChart = (
        confirmed ?
            (
                <Bar data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: "People",
                        backgroundColor: [
                            'rgba(0,0,255,0.5)',
                            'rgba(0,255,0,0.5)',
                            'rgba(255,0,0,0.5)'],
                        data:[confirmed.value,recovered.value,deaths.value]
                    }]
                }}
                    options={{
                        legend: { display: false },
                        title: { display: true,text:`Current State in ${country}` },
                }}
                />
            ) : (<div class="d-flex justify-content-center"><div class="spinner-border text-primary"></div></div>)
    );
 
    return (
        <div className="container small row col-xs-5 col-sm-8 col-md-8 col-lg-9 mx-auto p-5 my-4 card">
            {country ? barChart : lineChart}
        </div>
    )
}

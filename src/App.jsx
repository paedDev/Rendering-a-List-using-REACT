
import List from "./List/List";

function App () {
    const fruits = [{id:1,name:"apple",calories: 123},
                     {id:2,name:"banana",calories: 23},
                    { id:3,name:"watermelon",calories: 45},
                     {id:4,name:"melon",calories: 60},
                    { id:5,name:"pineapple",calories: 100},
    ]
    const vegetables = [{id:6,name:"potatoes",calories: 80},
                         {id:7,name:"eggplant" ,calories: 35},
                         {id:8,name:"carrots",calories: 78},
                       {  id:9,name:"brocolli",calories: 90},
                       {  id:10,name:"celery",calories: 120},
]
    


    return (
        <>
            {fruits.length > 0 && <List items = {fruits} category = "Fruits" />}
           { vegetables.length > 0 && <List items = {vegetables} category = "Vegetables" />}
        </>
    )
}

export default App;
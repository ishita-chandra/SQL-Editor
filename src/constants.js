const q1 = "SELECT * FROM regions;"
const q2 = "SELECT * FROM regions WHERE regionID = 1;"
const q3 = "SELECT * FROM regions LIMIT 2;"
const q4 = "SELECT regionDescription FROM regions;"
const data1={
    id:1,
    headers:["Region ID","Region Description"],
    data:[[1,"Eastern"],[2,"Western"],[3,"Northern"],[4,"Southern"]]
}
const data2={
    id:1,
    headers:["Region ID","Region Description"],
    data:[[1,"Eastern"]]
}
const data3={
    id:1,
    headers:["Region ID","Region Description"],
    data:[[1,"Eastern"],[2,"Western"]]
}
const data4={
    id:1,
    headers:["Region Description"],
    data:[["Eastern"],["Western"],["Northern"],["Southern"]]
}
const map = {
[q1]:data1,
[q2]:data2,
[q3]:data3,
[q4]:data4,
}
export {q1,q2,q3,q4,map}
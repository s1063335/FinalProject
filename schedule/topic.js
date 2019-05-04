var topic=[
    "上課",
    "停課",
    "停課",
    "上課",
    "上課",
    "停課"
];

var startDate=new Date();

function setMonthAndDay(startMonth,startDay)
{
    startDate.setMonth(startMonth-1,startDay);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(2,21);
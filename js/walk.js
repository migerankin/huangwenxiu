var m_top = '200px'
var m_left = '500px'
var m_top_num = 200
var m_left_num = 500
var isclose = false
// console.log(document.getElementsByClassName('boy')[0].style.left);

function startWalk(){
document.addEventListener("keydown", function (event) {
    m_top_num = parseInt(m_top.replace('px'))
    m_left_num = parseInt(m_left.replace('px'))
    if(parseInt(m_top.replace('px'))<0)m_top = '0px'
    if(parseInt(m_left.replace('px'))<0)m_left = '0px'
    if((m_top_num>200&&m_top_num<400)&&(m_left_num>700&&m_left_num<1100)){
        document.getElementById('startF').style.display = 'block'
        isclose=true
    }
    else document.getElementById('startF').style.display = 'none'
    switch (event.key) {
        case "w":
            m_top=parseInt(m_top.replace('px'))-15+'px'
            document.getElementsByClassName('people')[1].style
            .top = m_top
            $('.people').eq(1).find('img').eq(1).attr('src',`./img/m/m_up.png`)
            break;
        case "a":
            m_left=parseInt(m_left.replace('px'))-15+'px'
            document.getElementsByClassName('people')[1].style
            .left = m_left
            $('.people').eq(1).find('img').eq(1).attr('src',`./img/m/m_left.png`)
            break;
        case "d":
            m_left=parseInt(m_left.replace('px'))+15+'px'
            document.getElementsByClassName('people')[1].style
            .left = m_left
            $('.people').eq(1).find('img').eq(1).attr('src',`./img/m/m_right.png`)
            break;
        case "s":
            m_top=parseInt(m_top.replace('px'))+15+'px'
            document.getElementsByClassName('people')[1].style
            .top = m_top
            $('.people').eq(1).find('img').eq(1).attr('src',`./img/m/m_down.png`)
            break;
        case "f":
            if(isclose)
            document.getElementById('zj').play()
            startCircle()
            document.getElementById('startF').style.display = 'none'
    }
});}
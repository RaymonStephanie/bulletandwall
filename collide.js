function isCollided(go1,go2) 
{
    if (go1.x - go2.x < go2.width/2 + go1.width/2 && go2.x-go1.x < go2.width/2 + go1.width/2
    && go1.y- go2.y < go2.height/2 + go1.height/2 && go2.y- go1.y < go2.height/2 + go1.height/2) 
        {
            go1.velocityX = 0;
            go1.x = go2.x - thickness + 15;
            definedeformation();
        }
}
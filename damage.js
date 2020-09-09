function definedeformation () {
    deformation = Math.round(( 0.5* weight * speed * speed / ( thickness * thickness * thickness)));

    if (deformation > 10) {
        wall.shapeColor = "red";
    }

    if (deformation < 10) {
        wall.shapeColor = "green";
    }

  }
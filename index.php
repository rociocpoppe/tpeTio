<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <title>Regaleria Bazar</title>
    <link rel="stylesheet" href="../tpe/css/style.css">
    <script src="../tpe/js/main_index.js"></script> 
</head>

<body>
    <header>
        <div class="logo">
            <img src="../tpe/img/Maya.jpg" class="logoMaya"/>
            <div>
                <div class="btn_menu"><a>MENÚ</a></div>       
                <nav class="navegadores">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="../tpe/html/productos.html">Productos</a></li>
                        <li><a href="../tpe/html/novedades.html">Novedades</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    <!--Realizamos varios div para poder partir el body y poner de un lado la informacion de Maya y del otro imagenes ilustrativas  -->
    <div class="cajacentral">
            <div class="columnaizq">
                <section>
                        <h1>Bienvenidos</h1>
                        <p>Somos especialistas en atención a comercios de todo el país, fabricantes e importadores, con una trayectoria de más de 20 años.
                        Les ofrecemos un <strong>catálogo</strong> con una amplia variedad de artículos.
                        <strong>Atención personalizada:</strong> nuestro equipo de ventas lo ayudará en todo momento a vender más.
                        Contamos con el <strong>stock permanente.</strong>
                        <strong>Entrega sin cargo.</strong></p>
                    <div>
                        <h2>PRODUCTOS DESTACADOS:</h2>
                        <ul class="items">
                            <li>Cafetera Goteo</li>
                            <li>Bandeja Cama Plegable</li>
                            <li>Bañera Modelo Italiano</li>
                            <li>Organizador de madera Blanco</li>
                            <li>Home Spray Frutas Rojas y Peras</li>
                            <li>Cucharitas de té Antique Corona</li>
                            <li>Cuadro Smile</li>
                            <li>Decantador Libbey</li>
                            <li>Sillón Director Reforzado</li>
                            <li>Jarra Catering</li>
                            <li>Maceta Flor</li>
                            <li>Balanza Cocina 5kg</li>
                            <li>Chaira Metal</li>
                            <li>Practibox Cristal 2 Pisos</li>
                            <li>Campana Redonda Flexible</li>
                        </ul> 
                    </div>
                </section>
            </div>
            <aside class="imagenesdeMaya">
                <div class="imagenIlustrativa">
                    <img src="../tpe/img/bowls.png"/>
                </div>
                <div class="imagenIlustrativa2">
                    <img src="../tpe/img/tostadora.png"/>
                </div>
            </aside> 
        </div>
        <p class="saludo"><strong>¡Debajo encontrarás nuestras redes sociales para seguirnos y contactarnos!</strong></p>
    </body>
    <footer>
        <p><?php
            $about= "Trabajo especial web 1 - 2020";
            echo "<h4> ".$about."</h4>";

?></p>
        <a href="https://www.facebook.com"><img src="../tpe/img/logofacebook.jpg"/>
        </a>
        <a href="https://www.instagram.com"><img src="../tpe/img/logoinstagram.jpg"/>
        </a>
    </footer>
</html>
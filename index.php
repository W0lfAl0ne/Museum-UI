<?php
require_once('functions.php');
$data = initializeApp('streamline');
$n = sizeof($data['items']);

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Bảo Tàng Văn Hóa Các Dân Tộc Việt Nam</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/css.css">
</head>

<body>
    <nav class="navbar-inverse navbar-fixed-top">
        <div class="container-fluid ">
            <div class="nameWeb">
                <a href="#">Bảo Tàng Văn Hóa</a></li>
            </div>

            <ul class="nav navbar-nav navbar-right">
                <li><a href="Interactive/game.html">Trò Chơi</a></li>
                
            </ul>


        </div>
    </nav>



    <!-- END HEADER -->

    <div class="anhbia" style="background: url(<?php echo $data["img"] ?>) no-repeat 100% 100%; background-size: cover; background-attachment: fixed;">
        <!-- <img src="image/img1.jpg" alt="ảnh bảo Tàng"> -->
    </div>
    <!-- CONTENT -->
    <div class="container-fluid content">
        <p class="themeTitle"><?php echo $data["title"] ?></p>
        <i class="themeDesc"><?php echo $data["desc"] ?></i>
        <div class="row noiBat">

            <div class="col-sm-6">
                <div class="diSanTrai">
                    <?php
                    for ($i = 0; $i < $n; $i++) if ($i % 2 == 0) { ?>
                        <a class="khungAnh" href="thongtin.php?id=<?php echo $data["items"][$i]["ID"] ?>">
                            <img src="<?php echo $data["items"][$i]["img"] ?>" alt="">
                            <figcaption>
                                <h2><?php echo  $data["items"][$i]["name"] ?></h2>
                                <b><?php echo  $data["items"][$i]["desc"] ?></b>
                            </figcaption>
                            <p><?php echo  $data["items"][$i]["name"] ?></p>
                        </a>

                    <?php } ?>

                </div>

            </div>

            <div class="col-sm-6">
                <div class="diSanPhai">
                    <?php
                    for ($i = 0; $i < $n; $i++) if ($i % 2 == 1) { ?>
                        <a class="khungAnh" href="thongtin.php?id=<?php echo $data["items"][$i]["ID"] ?>">
                            <img src="<?php echo $data["items"][$i]["img"] ?>" alt="">
                            <figcaption>
                                <h2><?php echo  $data["items"][$i]["name"] ?></h2>
                                <b><?php echo  $data["items"][$i]["desc"] ?></b>
                            </figcaption>
                            <p><?php echo  $data["items"][$i]["name"] ?></p>
                        </a>

                    <?php } ?>
                </div>
            </div>
        </div>
        
    </div>

    <!-- END CONTENT -->
    <script src="js/js.js"></script>
</body>
<footer class="container-fluid text-center">
    <body>
      <div class="footer-icon">
        <a href="#"><b class="ti-facebook"></b></a>
        <a href="#"><b class="ti-instagram"></b></a>
        <a href="#"><b class="ti-twitter-alt"></b></a>
        <a href="#"><b class="ti-youtube"></b></a>
        <a href="#"><b class="ti-linkedin"></b></a>
        <a href="#"><b class="ti-pinterest"></b></a>
      </div>
      
      <div class="support">
        <h4>Liên Hệ Hỗ Trợ</h4>
        <b><h5>Phone: 0374819189</h5></b>
        <b><h5>Email: nhom14@gmail.com</h5></b>
        <b><h5>Địa Chỉ: 144 xuân thủy, Cầu Giấy</h5></b>
      </div>

    </body>
  </footer>

</html>
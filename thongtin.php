<?php
require_once('functions.php');
$data = initializeApp('streamline');
$n = sizeof($data['items']);
$id = $_GET['id'];
foreach ($data["items"] as $item) if ($item["ID"] == $id) {
    $d = $item;
    break;
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title><?php echo $d["name"] ?></title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/thongtincss.css">
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/qrcode.min.js"></script>
    <script type="text/javascript" src="js/thongtinjs.js"></script>
</head>

<body>
    <nav id="navbar" class="navbar-inverse navbar-fixed-top">
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


    <!-- CONTENT -->
    <div id="anhbia">
        <img onclick="clickImg(this.src)" src="<?php echo $d["img"] ?>" alt="">
    </div>
    <div id="hienImg" class="modal">
        <img src="" alt="">
        <span onclick="document.getElementById('hienImg').style.display='none'" class="close" title="Close Modal">&times;</span>
    </div>
    <div id="nen"></div>
    <div class="container-fluid content">
        <?php if ($d["audio"]) { ?>
            <span id="sound" onclick="clickplayer()">
                <audio id="audio" controls>
                    <source src="<?php echo $d["audio"] ?>" type="audio/mpeg">
                </audio>
                <span id="control-play" class="glyphicon glyphicon-music"></span>
            </span>
        <?php } ?>
        <div class="noidung">
            <h2><?php echo $d["name"] ?></h2>
            <h4><?php echo $d["desc"] ?></h4>
            <br>
        </div>
        <?php

        if ($d["items"]) {
            for ($i = 0; $i < sizeof($d["items"]); $i++) if ($i % 2 == 0) { ?>
                <div class="item">
                    <div class="noidungTrai">
                        <h2><?php echo $d["items"][$i]["title"] ?></h2>
                        <?php if ($d["items"][$i]["img"]) { ?>
                            <div class="khungAnh">
                                <img onclick="clickImg(this.src)" src="<?php echo $d["items"][$i]["img"] ?>" alt="<?php echo $d["items"][$i]["descImg"] ?>">
                                <i><?php echo $d["items"][$i]["descImg"] ?></i>
                            </div>
                        <?php } ?>
                        <h4><?php echo $d["items"][$i]["content"] ?></h4>
                        <br>
                    </div>
                </div>
            <?php } else { ?>
                <div class="item">
                    <div class="noidungPhai">
                        <h2><?php echo $d["items"][$i]["title"] ?></h2>
                        <?php if ($d["items"][$i]["img"]) { ?>
                            <div class="khungAnh">
                                <img onclick="clickImg(this.src)" src="<?php echo $d["items"][$i]["img"] ?>" alt="<?php echo $d["items"][$i]["descImg"] ?>">
                                <i><?php echo $d["items"][$i]["descImg"] ?></i>
                            </div>
                        <?php } ?>
                        <h4><?php echo $d["items"][$i]["content"] ?></h4>
                        <br>
                    </div>
                </div>
        <?php }
        } ?>


        <div class="ket">
            <p>Quét mã QR để thực hiện trả lời các câu hỏi</p>
            <div id="qrcode"></div>
            <script type="text/javascript">
                var data = <?php echo json_encode($id, JSON_HEX_TAG); ?>;
                var qrcode = new QRCode(document.getElementById("qrcode"), {
                    text: "trochoi.php?id=" + data,
                    width: 128,
                    height: 128,
                    colorDark: "#000000",
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.L,
                });
            </script>
        </div>
    </div>

    <!-- END CONTENT -->

    <script>
        var modal = document.getElementById('hienImg');
        var nen = document.getElementById('nen');
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
            if (event.target == nen) {
                $("#sound").removeClass('clickPlayer');
                $("#nen").css('display', 'none');
                $("#audio").css('display', 'none');
                $("#control-play").css('display', 'block');

                if (document.getElementById("audio").paused) {
                    $("#control-play").removeClass('glyphicon-pause');
                    $("#control-play").addClass('glyphicon-music');
                } else {
                    $("#control-play").removeClass('glyphicon-music');
                    $("#control-play").addClass('glyphicon-pause');
                }
            }
        }
    </script>

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
            <b>
                <h5>Phone: 0374819189</h5>
            </b>
            <b>
                <h5>Email: nhom14@gmail.com</h5>
            </b>
            <b>
                <h5>Địa Chỉ: 144 xuân thủy, Cầu Giấy</h5>
            </b>
        </div>
        <!-- <iframe id="vd" src="https://www.youtube-nocookie.com/embed/<?php echo $d["video"] ?>?autoplay=0&controls=0&amp;start=80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->

    </body>
</footer>




</html>
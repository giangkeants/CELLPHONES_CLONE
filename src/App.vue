<template>
  <div id="app">
    <!-- Navbar -->
    <nav class="navbar ">
      <div class="container-fluid nav1">
        <div class="navbar-header logo1">
          <a href="#"><img class="logo" src="/dist/image/as.png" alt=""></a>
        </div>
        <ul class="nav navbar-nav navbarmenu fr">
          <li style="margin-top:10px;"><a href="#"><i class="fas fa-bars"></i> Danh mục</a></li>
          <li><a href="#"><i class="fas fa-map-marker-alt"></i> Xem giá tại<br> Miền Nam</a></li>
        </ul>

        <form class="navbar-form navbar-left formSearch" action="/action_page.php">
          <div class="">
            <input
              type="text"
              class="form-control formedit"
              placeholder="Bạn cần tìm gì?"
              name="search"
            />
            <div class=" btnsearch">
              <button  type="submit">
               <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </form>

        <ul class="nav navbar-nav navbarmenu">
          <li><a href="#"><i class="fas fa-phone-alt"></i> Gọi mua hàng <br> <strong>1800.2097</strong></a></li>
          <li><a href="#"><i class="fas fa-map-marker-alt"></i> Cửa hàng <br> gần bạn</a></li>
          <li><a href="#"><i class="fas fa-truck"></i>Tra cứu <br> đơn hàng</a></li>
          <li style="margin-top:10px;"><a href="#"><i class="fas fa-shopping-bag"></i> Giỏ hàng</a></li>
          <li><a href="#"><i class="fas fa-user-circle"></i><br> Smember</a></li>
        </ul>
      </div>
    </nav>
   
      <div class="container">
        <div class="slider">
            <div class ="menu">
              <ul>
                <li><i class="fas fa-mobile-alt"></i><strong> Điện thoại</strong><i class="right"></i></li>
                <li><i class="fas fa-laptop"></i><strong> Laptop</strong><i class="right"></i></li>
                <li><i class="fas fa-tablet"></i><strong> Máy tính bảng</strong><i class="right"></i></li>
                <li><i class="fas fa-headphones-alt"></i><strong> Âm thanh</strong><i class="right"></i></li>
                <li><i class="fas fa-stopwatch"></i><strong> Đồng hồ </strong><i class="right"></i></li>
                <li><i class="fas fa-home"></i><strong> Nhà thông minh</strong><i class="right"></i></li>
                <li><i class="fas fa-plug"></i><strong> Phụ kiện</strong><i class="right"></i></li>
                <li><i class="fas fa-desktop"></i><strong> PC - Màn hình</strong><i class="right"></i></li>
                <li><i class="fas fa-tv"></i><strong> Tivi</strong><i class="right"></i></li>
                <li><i class="fas fa-sync"></i><strong> Thu cũ</strong><i class="right"></i></li>
                <li><i class="fas fa-mobile-alt"></i><strong> Hàng cũ</strong><i class="right"></i></li>
                <li><i class="fas fa-bullhorn"></i><strong> Khuyến mãi</strong><i class="right"></i></li>
              </ul>
            </div>

            <div class="middle">
                <div id="show">                
                  <carousel :slides="slides" :interval="3000" controls indicators></carousel>
                </div>
                
                <div id ="menu-horizontal">
                    <ul>
                      <li>MỪNG KHAI TRƯƠNG<br> Giảm sốc đến 65%</li>
                      <li>GALAXY S22 ULTRA<br> Ưu đãi hấp dẫn</li>
                      <li>NOKIA C21<br>Màn khủng pin trâu</li>
                      <li>XIAOMI REDMIBOOK 15<br>Giá rẻ vô đối</li>
                      <li>MSI MODERN 14<br> Mỏng nhẹ - thời thượng</li>
                    </ul>
                </div>
            </div>
            <div class="slide-right">
              <img src="/dist/image/content2.png" alt="">
              <img src="/dist/image/content3.png" alt="">
              <img src="/dist/image/content4.png" alt="">
            </div>
        </div>
    </div>
    
    <div class ="Product-title">
      <div class ="title-product">
        <h2><strong> ĐIỆN THOẠI NỔI BẬT NHẤT</strong></h2>
      </div>
        <div class="list-product">
          <a href="#">Apple</a>
          <a href="#">Xiaomi</a>
          <a href="#">OPPO</a>
          <a href="#">realme</a>
          <a href="#">Nokia</a>
          <a href="#">ASUS</a>
          <a href="#">Tecno</a>
          <a href="#">vivo</a>
          <a href="#">Xem tất cả</a>
        </div>  
    </div>
    <section>
        <div id="product">
            <div class="containe">
                <div class="row">
                    <div class="col-md-15 col-xs-3 col-md-offset-1 text-center dau " data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/iphone_11_white_4.webp" width="150px">
                            <p class="name">iPhone 11 64GB | Chính hãng VN/A</p>
                            <p class="price-del"><del>18.000.000 ₫</del> </p>

                            <p class="price">11.190.000 ₫ </p>

                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 98 đánh giá</span></div>
                            <br>

                           <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                    <div class="col-md-15 col-xs-3 text-center dau" data-aos-delay="300" data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/iphone_13-_pro-5_4.webp" width="150px">
                            <p class="name">iPhone 13 pro Max 128GB | Chính hãng VN/A</p>
                              <p class="price-del"><del>34.990.000 ₫</del> </p>
                            <p class="price">27.590.000 ₫</p>
                        
                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 250 đánh giá</span></div>
                            <br>

                            <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                    <div class="col-md-15 col-xs-3 text-center dau" data-aos-delay="600" data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/iphone_12_pro_max_white_1.webp" width="150px">
                            <p class="name">iPhone 12 Pro Max 128GB | Chính hãng VN/A</p>
                            <p class="price-del"><del>30.990.000 ₫</del> </p>
                            <p class="price">32.990.000 ₫</p>
                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 152 đánh giá</span></div>
                            <br>

                            <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                    <div class="col-md-15 col-xs-3 text-center dau" data-aos-delay="900" data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/sm-s908_galaxys22ultra_front_burgundy_211119.webp" width="150px">
                            <p class="name">Samsung Galaxy S22 Ultra (8GB - 128GB)</p>
                            <p class="price-del"><del>30.990.000 ₫</del> </p>
                            <p class="price">26.190.000 ₫</p>

                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 148 đánh giá</span></div>
                            <br>

                            <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                    <div class="col-md-15 col-xs-3 text-center dau" data-aos-delay="900" data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/iphone_12_blue.webp" width="150px">
                            <p class="name">iPhone 12 64GB | Chính hãng VN/A</p>
                            <p class="price-del"><del>22.990.000 ₫</del></p>
                            <p class="price">15.890.000 ₫</p>
                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 68 đánh giá</span></div>
                            <br>
                            <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
 
    <div class ="Product-title">
      <div class ="title-product">
        <h2><strong>LAPTOP</strong></h2>
      </div>
        <div class="list-product">
          <a href="#">Macbook</a>
          <a href="#">Thinkpad</a>
          <a href="#">Asus</a>
          <a href="#">HP</a>
          <a href="#">Surface</a>
          <a href="#">Acer</a>
          <a href="#">MIS</a>
          <a href="#">Dell</a>
          <a href="#">Xem tất cả</a>
        </div>  
    </div>

       <section>
        <div id="product">
            <div class="containe">
                <div class="row">
                    <div class="col-md-15 col-xs-3 col-md-offset-1 text-center dau " data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/t_i_xu_ng_4_3.webp" width="150px">
                            <p class="name">MacBook Pro 13 M2 8GB 256GB</p>
                            <p class="price-del"><del>35.990.000 ₫</del> </p>
                            <p class="price">33.990.000 ₫ </p>
                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 98 đánh giá</span></div>
                            <br>
                           <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                    <div class="col-md-15 col-xs-3 text-center dau" data-aos-delay="300" data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/mac_air.webp" width="150px">
                            <p class="name">Macbook Air M1 256GB | Chính hãng Apple VN</p>
                              <p class="price-del"><del>28.990.000 ₫</del> </p>
                            <p class="price">22.590.000 ₫</p>
                        
                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 250 đánh giá</span></div>
                            <br>

                            <div class="promotion"><p class="gift-cont">Mua Office Home & Student 2021 kèm Macbook chỉ còn 2,090,000</p></div>
                        </div>
                    </div>
                    <div class="col-md-15 col-xs-3 text-center dau" data-aos-delay="600" data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/18_2_29.jpg" width="150px">
                            <p class="name">Laptop Asus Vivobook 13 Slate Oled T3300KA</p>
                            <p class="price-del"><del>17.790.000 ₫</del> </p>
                            <p class="price">15.790.000 ₫</p>
                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 152 đánh giá</span></div>
                            <br>

                            <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                    <div class="col-md-15 col-xs-3 text-center dau" data-aos-delay="900" data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/_0004_zenbook_s_13_oled__um5302_product_photo_8b_ponder_blue_04_touch_glass_numberpad.webp" width="150px">
                            <p class="name">Laptop Asus ZenBook UM5302TA-LX087W</p>
                            <p class="price-del"><del>29.990.000 ₫</del> </p>
                            <p class="price">27.990.000 ₫</p>

                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 148 đánh giá</span></div>
                            <br>

                            <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                    <div class="col-md-15 col-xs-3 text-center dau" data-aos-delay="900" data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/_0002_xiaomiredmibook15_01.jpg" width="150px">
                            <p class="name">Laptop Xiaomi RedmiBook 15 JXU4505AP </p>
                            <p class="price-del"><del>12.990.000 ₫</del></p>
                            <p class="price">11.990.000 ₫</p>
                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 68 đánh giá</span></div>
                            <br>
                            <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>


    
    <div class ="Product-title">
      <div class ="title-product">
        <h2><strong> MÀN HÌNH, MÁY TÍNH ĐỂ BÀN</strong></h2>
      </div>
        <div class="list-product">
          <a href="#">Máy tính bàn</a>
          <a href="#">Dell</a>
          <a href="#">Asus</a>
          <a href="#">Samsung</a>
          <a href="#">Máy tính đồng bộ</a>
          <a href="#">PC lắp sẵn CPS</a>
          <a href="#">Xem tất cả</a>
        </div>  
    </div>
   <section>
        <div id="product">
            <div class="containe">
                <div class="row">
                    <div class="col-md-15 col-xs-3 col-md-offset-1 text-center dau " data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/pc_lenovo.webp" width="150px">
                            <p class="name">PC Gaming Lenovo IdeaCentre G5 14IMB05</p>
                            <p class="price-del"><del>22.990.000 ₫</del> </p>

                            <p class="price">15.690.000 ₫ </p>

                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 98 đánh giá</span></div>
                            <br>

                           <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                    <div class="col-md-15 col-xs-3 text-center dau" data-aos-delay="300" data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/1_85_6.webp" width="150px">
                            <p class="name">Màn hình Xiaomi Monitor 1C BHR4510GL 23.8 inch</p>
                              <p class="price-del"><del>3.490.000 ₫</del> </p>
                            <p class="price">3.290.000 ₫</p>
                        
                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 250 đánh giá</span></div>
                            <br>

                            <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                    <div class="col-md-15 col-xs-3 text-center dau" data-aos-delay="600" data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/5_34_2.png" width="150px">
                            <p class="name">Màn hình đồ họa HUAWEI MateView 28 </p>
                            <p class="price-del"><del>18.990.000 ₫</del> </p>
                            <p class="price">15.990.000 ₫</p>
                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 152 đánh giá</span></div>
                            <br>

                            <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                    <div class="col-md-15 col-xs-3 text-center dau" data-aos-delay="900" data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/1_83_1.png" width="150px">
                            <p class="name">Màn hình thông minh Samsung M8 </p>
                            <p class="price">18.990.000 ₫</p>

                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 148 đánh giá</span></div>
                            <br>

                            <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                    <div class="col-md-15 col-xs-3 text-center dau" data-aos-delay="900" data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/pc_gaming_cps_001_1.webp" width="150px">
                            <p class="name">PC Gaming CPS 001 LS32BM801UEXXV 32 650 MateView 28</p>
                            <br>
                            <p class="price-del"><del>9.230.000 ₫</del></p>
                            <p class="price">8.730.000 ₫</p>
                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            
                            <span style="float: left;">&nbsp;  68 đánh giá</span></div>
                            <br>
                            <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    </section>

    <div class ="Product-title">
      <div class ="title-product">
        <h2><strong> MÁY TÍNH BẢNG  </strong></h2>
      </div>
        <div class="list-product">
          <a href="#">Ipad Air</a>
          <a href="#">Ipad Pro</a>
          <a href="#">Tab S8 Ultra</a>
          <a href="#">Lenovo</a>
          <a href="#">Samsung</a>
          <a href="#">Nokia</a>
          <a href="#">Xem tất cả</a>
        </div>  
    </div>
   <section>
        <div id="product">
            <div class="containe">
                <div class="row">
                    <div class="col-md-15 col-xs-3 col-md-offset-1 text-center dau " data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/ipad-10-2-2021-4_2.webp" width="150px">
                            <p class="name"> Apple iPad 10.2 2021 WiFi 64GB | Chính hãng Apple Việt Nam</p>
                            <p class="price-del"><del>10.990.000 ₫</del> </p>

                            <p class="price">9.190.000 ₫ </p>

                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 98 đánh giá</span></div>
                            <br>

                           <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                    <div class="col-md-15 col-xs-3 text-center dau" data-aos-delay="300" data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/2_39.webp" width="150px">
                            <p class="name">Apple Ipad Air 5 (2022) 64GB | Chính hãng Apple Việt Nam</p>
                              <p class="price-del"><del>16.990.000 ₫</del> </p>
                            <p class="price">15.800.000 ₫</p>
                        
                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 250 đánh giá</span></div>
                            <br>

                            <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                    <div class="col-md-15 col-xs-3 text-center dau" data-aos-delay="600" data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/ipad-mini-6.webp" width="150px">
                            <p class="name"> Apple Ipad mini 6 WiFi 64GB | Chính hãng Apple Việt Nam</p>
                            <p class="price-del"><del>14.990.000 ₫</del> </p>
                            <p class="price">13.190.000 ₫</p>
                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 152 đánh giá</span></div>
                            <br>

                            <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                    <div class="col-md-15 col-xs-3 text-center dau" data-aos-delay="900" data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/apple_ipad_pro_11_2021_m1_wifi_128gb.webp" width="150px">
                            <p class="name">Apple Ipad Pro 11 2021 M1 128GB | Chính hãng Apple Việt Nam</p>
                            <p class="price-del"><del>30.990.000 ₫</del> </p>
                            <p class="price">26.190.000 ₫</p>

                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 148 đánh giá</span></div>
                            <br>

                            <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                    <div class="col-md-15 col-xs-3 text-center dau" data-aos-delay="900" data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/ipad_air_10.webp" width="150px">
                            <p class="name">Apple Ipad Air 10.9 (2020) 64GB | Chính hãng Apple Việt Nam</p>
                            <p class="price-del"><del>16.990.000 ₫</del></p>
                            <p class="price">14.190.000 ₫</p>
                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 68 đánh giá</span></div>
                            <br>
                            <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    <div class ="Product-title">
      <div class ="title-product">
        <h2><strong> ÂM THANH</strong></h2>
      </div>
        <div class="list-product" style="padding-right: 80px;">
          <a href="#">Tai nghe Bluetooth</a>
          <a href="#">Tai nghe không dây</a>
          <a href="#">Tai nghe Gaming</a>
          <a href="#">Loa Bluetooth</a>
          <a href="#">Loa Karaoke</a>
          <a href="#">Xem tất cả</a>
        </div>  
    </div>
   <section>
        <div id="product">
            <div class="containe">
                <div class="row">
                    <div class="col-md-15 col-xs-3 col-md-offset-1 text-center dau " data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/buds-live_1.webp" width="150px">
                            <p class="name">Tai nghe Bluetooth Samsung Galaxy Buds Live</p>
                            <p class="price-del"><del>4.490.000 ₫</del> </p>

                            <p class="price">1.490.000 ₫ </p>

                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 98 đánh giá</span></div>
                            <br>

                           <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                    <div class="col-md-15 col-xs-3 text-center dau" data-aos-delay="300" data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/jbl-charge-4.jpg" width="150px">
                            <p class="name">Loa Bluetooth JBL Charge 4</p>
                            <p class="price">3.490.000 ₫</p>
                        
                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 250 đánh giá</span></div>
                            <br>

                            <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                    <div class="col-md-15 col-xs-3 text-center dau" data-aos-delay="600" data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/tai-nghe-khong-day-xiaomi-redmi-buds-3-lite.webp" width="150px">
                            <p class="name">Tai nghe không dây Xiaomi Redmi Buds 3 Lite</p>
                            <p class="price-del"><del>590.000 ₫</del> </p>
                            <p class="price">590.000 ₫</p>
                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 152 đánh giá</span></div>
                            <br>

                            <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                    <div class="col-md-15 col-xs-3 text-center dau" data-aos-delay="900" data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/samsung-hw-t420.webp" width="150px">
                            <p class="name">Loa thanh SoundBar Samsung HW T420</p>
                            <p class="price-del"><del>3.090.000 ₫</del> </p>
                            <p class="price">1.650.000 ₫</p>

                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 148 đánh giá</span></div>
                            <br>

                            <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                    <div class="col-md-15 col-xs-3 text-center dau" data-aos-delay="900" data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/tai-nghe-chup-tai-sony-wh-1000xm5-2-removebg-preview.webp" width="150px">
                            <p class="name">Tai nghe chụp tai Sony WH-1000XM5</p>
                            <p class="price-del"><del>10.990.000 ₫</del></p>
                            <p class="price">9.490.000 ₫</p>
                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 68 đánh giá</span></div>
                            <br>
                            <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    <div class ="Product-title">
      <div class ="title-product">
        <h2><strong> ĐỒNG HỒ THÔNG MINH</strong></h2>
      </div>
        <div class="list-product">
          <a href="#">Apple Watch</a>
          <a href="#">Samsung</a>
          <a href="#">Huawei</a>
          <a href="#">Garmin</a>
          <a href="#">Xiaomi</a>
          <a href="#">Amazfit</a>
          <a href="#">Xem tất cả</a>
        </div>  
    </div>
   <section>
        <div id="product">
            <div class="containe">
                <div class="row">
                    <div class="col-md-15 col-xs-3 col-md-offset-1 text-center dau " data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/band-7.webp" width="150px">
                            <p class="name">Vòng đeo tay thông minh Xiaomi Mi Band 7</p>
                            <p class="price-del"><del>2.290.000 ₫</del> </p>
                            <p class="price">1.190.000 ₫ </p>

                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 98 đánh giá</span></div>
                            <br>

                           <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                    <div class="col-md-15 col-xs-3 text-center dau" data-aos-delay="300" data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/bkbkb_.jpg" width="150px">
                            <p class="name">Đồng hồ định vị trẻ em Myalo KS62W</p>
                              <p class="price-del"><del>1.290.000 ₫</del> </p>
                            <p class="price">1.150.000 ₫</p>
                        
                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 250 đánh giá</span></div>
                            <br>

                            <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                    <div class="col-md-15 col-xs-3 text-center dau" data-aos-delay="600" data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/xanh_3.webp" width="150px">
                            <p class="name">Đồng hồ thông minh Huawei Watch Fit 2</p>
                            <p class="price-del"><del>3.290.000 ₫</del> </p>
                            <p class="price">2.990.000 ₫</p>
                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 152 đánh giá</span></div>
                            <br>

                            <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                    <div class="col-md-15 col-xs-3 text-center dau" data-aos-delay="900" data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/thumb_1618120865-_1__1.webp" width="150px">
                            <p class="name">Vòng đeo tay thông minh Huawei Band 6</p>
                            <p class="price-del"><del>1.490.000 ₫</del> </p>
                            <p class="price">899.000 ₫</p>

                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 148 đánh giá</span></div>
                            <br>

                            <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                    <div class="col-md-15 col-xs-3 text-center dau" data-aos-delay="900" data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/mkt_odin_product_lmage_fluoroelastomer_front_30_left_en_hq_png_800x800_20220403.png" width="150px">
                            <p class="name">Đồng hồ thông minh Huawei Watch GT3 Pro </p>
                            <p class="price-del"><del>8.490.000 ₫</del></p>
                            <p class="price">7.990.000 ₫</p>
                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 68 đánh giá</span></div>
                            <br>
                            <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    <div class ="Product-title">
      <div class ="title-product">
        <h2><strong> NHÀ THÔNG MINH</strong></h2>
      </div>
        <div class="list-product">
          <a href="#">Máy lọc thông minh</a>
          <a href="#">Robot hút bụi</a>
          <a href="#">Khóa thông minh</a>
          <a href="#">TV Box</a>
          <a href="#">Gia dụng bếp</a>
          <a href="#">Xem tất cả</a>
        </div>  
    </div>
       <section>
        <div id="product">
            <div class="containe">
                <div class="row">
                    <div class="col-md-15 col-xs-3 col-md-offset-1 text-center dau " data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/may-chieu-xiaomi-mi-smart-projector-2.jpg" width="150px">
                            <p class="name">Máy chiếu Xiaomi Mi Smart Projector 2</p>
                            <p class="price-del"><del>19.990.000 ₫</del> </p>

                            <p class="price">14.840.000 ₫ </p>

                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 98 đánh giá</span></div>
                            <br>

                           <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                    <div class="col-md-15 col-xs-3 text-center dau" data-aos-delay="300" data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/_0005_2020-xiaomi-mijia-smart-ng-2-pro_1__2_1.jpg" width="150px">
                            <p class="name">Quạt thông minh Mi Smart Standing Fan 2 Lite</p>
                              <p class="price-del"><del>1.690.000 ₫</del> </p>
                            <p class="price">990.000 ₫</p>
                        
                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 250 đánh giá</span></div>
                            <br>

                            <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                    <div class="col-md-15 col-xs-3 text-center dau" data-aos-delay="600" data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/robot-hut-bui-dreame-bot-w10.jpg" width="150px">
                            <p class="name">Robot hút bụi Dreame bot W10</p>
                            <p class="price-del"><del>21.990.000 ₫</del> </p>
                            <p class="price">17.490.000 ₫</p>
                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 152 đánh giá</span></div>
                            <br>

                            <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                    <div class="col-md-15 col-xs-3 text-center dau" data-aos-delay="900" data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/m_y_l_c_xiaomi.jpg" width="150px">
                            <p class="name">Máy lọc không khí Xiaomi Air Purifier 4 Pro </p>
                            <p class="price-del"><del>6.290.000 ₫</del> </p>
                            <p class="price">5.290.000 ₫</p>

                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 148 đánh giá</span></div>
                            <br>

                            <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                    <div class="col-md-15 col-xs-3 text-center dau" data-aos-delay="900" data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/ksp_v2.jpg" width="150px">
                            <p class="name">Máy lọc không khí Xiaomi Air Purifier 4 Lite</p>
                            <p class="price-del"><del>3.990.000 ₫</del></p>
                            <p class="price">3.090.000 ₫</p>
                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 68 đánh giá</span></div>
                            <br>
                            <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    <div class ="Product-title">
      <div class ="title-product">
        <h2><strong> TV</strong></h2>
      </div>
        <div class="list-product ">
          <div style="padding-left: 600px;">
            <a href="#">Samsung</a>
            <a href="#">LG</a>
            <a href="#">Xiaomi</a>
            <a href="#">Xem tất cả</a>
          </div>
          
        </div>  
    </div>
       <section>
        <div id="product">
            <div class="containe">
                <div class="row">
                    <div class="col-md-15 col-xs-3 col-md-offset-1 text-center dau " data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/1_74_38.jpg" width="150px">
                            <p class="name">Smart tivi  Xiaomi P1 55 inch</p>
                            <p class="price-del"><del>11.990.000 ₫</del> </p>

                            <p class="price">9.190.000 ₫ </p>

                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 98 đánh giá</span></div>
                            <br>

                           <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                    <div class="col-md-15 col-xs-3 text-center dau" data-aos-delay="300" data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/1_74_38.jpg" width="150px">
                            <p class="name">Smart tivi  Xiaomi P1 43 inch</p>
                              <p class="price-del"><del>9.990.000 ₫</del> </p>
                            <p class="price">7.990.000 ₫</p>
                        
                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 250 đánh giá</span></div>
                            <br>

                            <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                    <div class="col-md-15 col-xs-3 text-center dau" data-aos-delay="600" data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/untitled-1_4_6.webp" width="150px">
                            <p class="name">Smart Tivi di động LG Standby Me 27 inch</p>
                            <p class="price-del"><del>22.990.000 ₫</del> </p>
                            <p class="price">18.990.000 ₫</p>
                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 152 đánh giá</span></div>
                            <br>

                            <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                    <div class="col-md-15 col-xs-3 text-center dau" data-aos-delay="900" data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/1_74_45.jpg" width="150px">
                            <p class="name">Smart Tivi màn hình cong Samsung 4K 55 inch</p>
                            <p class="price-del"><del>22.490.000 ₫</del> </p>
                            <p class="price">11.190.000 ₫</p>

                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 148 đánh giá</span></div>
                            <br>

                            <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                    <div class="col-md-15 col-xs-3 text-center dau" data-aos-delay="900" data-aos="fade-up">
                        <div class="innerDau">
                            <img src="/dist/image/43_1_19.jpg" width="150px">
                            <p class="name">Smart Tivi 4K Samsung 55 inch QA55LS01TA</p>
                            <p class="price-del"><del>27.990.000 ₫</del></p>
                            <p class="price">16.900.000 ₫</p>
                            <div class ="icon-star is-active">
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <i class="fas fa-star starr"></i>
                            <span style="float: left;">&nbsp; 68 đánh giá</span></div>
                            <br>
                            <div class="promotion"><p class="gift-cont">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và <b>1 km</b> khác</p></div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    <footer>
<div class="footer" >
            <div class="footer-inner" style="background: #fff !important;">
                <div class="container py-5" >
                    <div class="row">
                        <div class="col-sm-3 box" style="cursor: pointer;">
                            <h1 class="title mb-3" style="font-size:20px;">Tìm cửa hàng</h1>
                            <h1 class="title mb-3" style="color: gray;">Tìm cửa hàng gần nhất</h1>
                            <h1 class="title mb-3" style="color: gray;">Mua hàng từ xa</h1>
                            <h1 class="title mb-3" style="color: gray;">Gặp trực tiếp cửa hàng gần nhất(Zalo hoặc gọi điện)</h1>
                            <h1 class="title mb-3" style="font-size:20px;">Phương thức thanh toán</h1>
                            <img src="/dist/image/pttt.png" width="10px" height="10px">

                        </div>
                        <div class="col-sm-3 box" style="color: gray;cursor: pointer;">
                             <h1 class="title mb-3">Gọi mua hàng 1800.2097</h1>
                            <h1 class="title mb-3">Gọi bảo hành 1800.2064</h1>
                            <h1 class="title mb-3">Gọi khiếu nại 1800.2063</h1>
                            <button style="width:250px;height: 50px;background: #DC143C;border-radius: 10px;border: none;color:#fff;text-align: left;font-size: 13px;padding-left:10px; 
                            ">Đối tác dịch vụ bảo hành <br> Điện thoại - Máy tính</button>
            
                            <button style="width:250px;height: 50px;background: #191970;border-radius: 10px;border: none;color:#fff;text-align: left;font-size: 13px;padding-left:10px; ">
                            Trung tâm bảo hành ủy quyền Apple</button>

                        </div>
                        <div class="col-sm-3 box" style="color: gray;cursor: pointer;">
                             <h1 class="title mb-3">Mua hàng và thanh toán Online</h1>
                            <h1 class="title mb-3">Mua hàng trả góp Online</h1>
                            <h1 class="title mb-3">Tra thông tin đơn hàng</h1>
                            <h1 class="title mb-3">Tra điểm Smember</h1>
                            <h1 class="title mb-3">Tra thông tin bảo hành</h1>
                            <h1 class="title mb-3">Tra cứu hóa đơn điện tử</h1>
                            <h1 class="title mb-3">Trung tâm bảo hành chính hãng</h1>
                            <h1 class="title mb-3">Quy định về việc sao lưu dữ liệu</h1>
                            <h1 class="title mb-3">Dịch vụ bảo hành điện thoại</h1>


                        </div>
                        <div class="col-sm-3 box" style="color: gray; cursor: pointer;">
                            <h1 class="title mb-3">Quy chế hoạt động</h1>
                            <h1 class="title mb-3">Chính sách Bảo hành</h1>
                            <h1 class="title mb-3">Liên hệ hợp tác kinh doanh</h1>
                            <h1 class="title mb-3">Khách hàng doanh nghiệp (B2B)</h1>
                            <h1 class="title mb-3">Ưu đãi thanh toán</h1>
                            <h1 class="title mb-3">Tuyển dụng</h1>

                        </div>

                    </div>
                     </div>
            </div>
        </div>

        <div class="footer">
            <div class="footer-inner" style="color: gray;">
                <div class="container py-5">
                    <div class="row">
                        <div class="col-sm-3 box">
                            <h1 class="title mb-3">Điện thoại IPhone</h1>
                            <h1 class="title mb-3">Điện thoại IPhone 13 - Điện thoai Iphone 13 Pro Max</h1>
                            <h1 class="title mb-3">Điện thoại IPhone 12 - Điện thoại  IPhone 11</h1>
                            <h1 class="title mb-3">IPhone cũ giá rẻ - iPhone 13 cũ - Iphone 12 cũ</h1>
                        </div>
                        <div class="col-sm-3 box">
                             <h1 class="title mb-3">Điện thoại Samsung</h1>
                            <h1 class="title mb-3">Điện thoại Samsung S22 - Điện thoại Samsung A73</h1>
                            <h1 class="title mb-3">Điện thoại Samsung A53 - Điện thoại Samsung A23</h1>
                            <h1 class="title mb-3">Điện thoại OPPO - Điện thoại Xiaomi - Điện thoại Nokia</h1>
                        </div>
                        <div class="col-sm-3 box">
                             <h1 class="title mb-3">Máy tính Laptop</h1>
                            <h1 class="title mb-3">Laptop HP - Laptop Dell - Laptop Midrosoft Surface</h1>
                            <h1 class="title mb-3">Laptop Acer - Laptop Lenovo - Laptop Asus</h1>
                            <h1 class="title mb-3">Máy tính để bàn - Màn hình máy tính</h1>
                        </div>
                        <div class="col-sm-3 box">
                             <h1 class="title mb-3" > Phụ kiện - Nhà thông minh</h1>
                            <h1 class="title mb-3">Camera - Camera hành trình</h1>
                            <h1 class="title mb-3">Bàn ghế công thái học</h1>
                        </div>

                    </div>
                    <address class="address" style="text-align :center;font-size:10px;">Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD: 0316172372 do sở KH & ĐT TP. HCM cấp ngày 02/03/2020. 
                    Địa chỉ: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam. Điện thoại: 028.7108.9666.</address>
                </div>
            </div>
        </div>
    </footer>
  </div>
  


</template>
<script >
import Carousel from "./components/carousel/Carousel.vue";
export default {
  name: "Show",
  components: { Carousel },
  data: () => ({ 
    slides: [
      "/dist/image/content1.png",
      "/dist/image/content5.png",
      "/dist/image/content6.png",
      "/dist/image/content7.png",
      "/dist/image/content8.png"
    ],
  }),
};
</script>
<style> 

*{
  margin: 0 ;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

/* navbar */
.nav1{
  top:0;
  position:fixed;
  z-index: 1000;
  background-color: rgb(224,5,43);
  padding-left: 150px;
  padding-right:50px;
  margin-bottom: 0px;
}
.nav1 a{

 color: #fff!important;
 padding: 10px 18px 10px 18px;
}
.logo1 .logo{
  margin-left:20px;
  margin-top: 10px;
}
.logo{
  height: 50px;
  width: 200px;
}
.navbarmenu li{
  border: 1px transparent solid;
  border-radius: 10px;
}
.navbarmenu .fr li a{
  background:rgb(235, 235, 235) !important;
}
.navbarmenu li a:hover{
  background:rgba(215, 215, 215, 0.604) !important;
  border-radius: 10px;
}
.input-group .formedit{
  border: #fff solid 1px;
}
.formSearch{
  position: relative;
  padding-top: 10px;
}
.formSearch input{
  padding-left: 25px;
  
  border-radius: 10px;
  width: 500px;
}

.btnsearch button{
  position: absolute;
  top: 40%;
  left: 8%;
  color: #4f5b66;
  background: transparent;
  border: none;
} 
/* /navbar */

.container {
    padding-top:15px ;
    width: 80%;
    height: fit-content;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
}

.container .slider {
    display: flex;
}

.container img {
    width: 300px;
    height: 150px;  
    background: red;

}

/* menu */
.slider{
  position: relative;
  display: block;
}
.menu ul{
    display: block;
    background:#fff;
    border-radius: 10px ;
    list-style:none;
    margin-right: 10px;
    box-shadow: rgb(177, 177, 177) 1px 1px 10px 1px;
    text-align: left;
}
.menu ul li{
  position: relative;
  text-decoration: none;
  font-size:14px;
  line-height: 33px;
  padding-left: 3px;
  width: 200px;
  cursor: pointer;
}
.menu ul li:hover{
  background: rgba(204, 204, 204, 0.423);
  border-radius: 10px ;

}
.menu ul li .right{
  position: absolute;
  border: solid #2c3e50;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
  right: 3%;
  top:30%;
}

#show img{
    border-radius: 10px;
    height:400px;
    width:700px;
}

/* menu horizontal */
.middle{
  position: relative;
}
#menu-horizontal{
  position: absolute;
  list-style:none;
  box-shadow: rgb(177, 177, 177) 2px 2px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 14.5vh;
}
#menu-horizontal ul{
    width: 94vh;
}
#menu-horizontal ul li{
  width: fit-content;
  display:inline-flex;
  cursor: pointer;
  font-size: 12px;
  padding: 30px 5px 39px 2px ;
  margin-top: 0px;
  margin-bottom: 0px;
}
#menu-horizontal ul li:hover{
  background: rgb(235, 235, 235) ;
}
.slide-right{
  position: relative;
  width: fit-content;
  border: 1px #000;
}
.slide-right img{
  position: relative;
  display: block;
  height: 17.5vh;
  width: 35vh;
  border-radius: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  box-shadow: rgb(177, 177, 177) 2px 2px;
  cursor: pointer;
}
/* Product */
.Product-title{
    width: 80%;
    height: fit-content;
    margin: 0 auto;
    position: relative;

}
.Product-title .title-product{
  width: 100%;
  position: relative;
}

.Product-title .list-product a{
  top:12px;
  position: relative;
  display: inline-flex;
  margin-left: 10px;
  background:rgb(235, 235, 235) ;
  border-radius: 10px;
  padding: 10px;
  color: #000;
  left:19%;
}

.Product-title .list-product a:hover{
    text-decoration: none;
}
.Product-title .list-product{
  position: relative;
}
.Product-title .title-product h2{
  position: absolute;
  display:flex;
  left:1%;
  top:0;
  font-size: 25px;
  color: #000;
}
/* 5 column */
.col-xs-15,
.col-sm-15,
.col-md-15,
.col-lg-15 {
    position: relative;
    min-height: 1px;
    padding-right: 10px;
    padding-left: 10px;
}

.col-xs-15 {
  width: 19%;
  float: left;
}

@media (min-width: 768px) {
  .col-sm-15 {
  width: 19%;
  float: left;
  }
}

@media (min-width: 992px) {
  .col-md-15 {
  width: 19%;
  float: left;
  }
}

@media (min-width: 1200px) {
  .col-lg-15 {
  width: 19%;
  float: left;
  }
}

/*/5 column */

#product {
    padding: 20px 180px;
}

#product .dau {
    cursor: pointer;
    padding: 40px 10px;
    overflow: hidden;
    margin: 10px 5px;
    transition: all .5s linear;
    border-radius: 10px;
    box-shadow: rgb(177, 177, 177) 1px 1px 10px 1px;
    
}
#product .dau::before{
  left:0;
  top:0;
  content: "Giảm giá";
  float: left;
  color:#fff;
  font-size:12px;
  position: absolute;
  width:80px;
  height:30px;
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,
  rgba(44, 187, 99, .15) 0 1px 2px,
  rgba(44, 187, 99, .15) 0 2px 4px,
  rgba(44, 187, 99, .15) 0 4px 8px,
  rgba(44, 187, 99, .15) 0 8px 16px,
  rgba(44, 187, 99, .15) 0 16px 32px;
  background-color: red;
  padding: 5px 0px;
}
#product .dau .name {
    font-size: 15px;
    font-weight: 700;
    margin: 20px 0;
    text-align: left;
}

#product .dau .price {
    color: #ce1818;
    font-size: 15px;
    font-weight: 700;
    text-align: left;

}

.starr{
  color:rgb(216, 168, 11);
  float: left;

}
.price-del{
  color:#4f5b66;
  font-weight: 700;
  float:right;
}
.promotion{
  border-radius: 10px;
  background: rgb(235, 235, 235) ;
}

/* /Product */


/* footer */
.footer {
    
    background-position: center;
    background-size: cover;
    text-align:left;
}

.footer-inner {
    background: rgba(227, 227, 227, 0.675);
}

.footer .box {
    padding: 0 15px;
    margin-top: 10px;
}

.footer .title {
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: .005rem;
}

.footer .address {
    color: inherit;
    font-size: 15px;
    opacity: .8;
}

/* /footer */
</style>

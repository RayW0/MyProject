import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import {ReactComponent as PhoneLogo} from './svg/phone_1-svg.svg'


function App() {

  const [chat_logs, setChatLogs] = useState([])

  useEffect(() => {
    handleLog()
    // let chat_button = document.getElementById('popup');
    // chat_button.addEventListener('click', openForm);
  })

  const openForm = () => {
    if (document.getElementById("block").style.display=="none"){
        document.getElementById("block").style.display = "block";
    }
    else{
        document.getElementById("block").style.display = "none";
    }
    console.log(document.getElementById("block"), "triggered openForm")
  }
  
  const createChatLog = (message) => {
    let request = axios.get(`http://127.0.0.1:8000/create-chat-log?message=${message}`, {message: message})
    return request
  }

  const getChatLog = () => {
    let request = axios.get(`http://127.0.0.1:8000/get-chat-log`, {withCredentials: false})
    return request
  }

  const handleLog = () => {
    getChatLog()
    .then((res) => {
      console.log('REEEEES', res.data)
      if (res.data.res === 'success'){
        let my_data = res.data.chat_logs
        let output = document.getElementById('output')
        for (let i=0; i<my_data.length; i++){
          output.value += my_data[i].date_of_creation + '       ' +  my_data[i].message + '\n'
        }
      }
    })
    .catch((err) => console.log(err))
  }
  const toggleChatView = () => {
    let chatBlock = document.getElementById('block')
    if (chatBlock.style.display === 'block'){
      chatBlock.style.display = 'none'
    }
    else{
      chatBlock.style.display = 'block'
    }
  }
  const sendMessage = () => {
    let input = document.getElementById("input")
    let output = document.getElementById("output")
    var contents = input.value
    createChatLog(contents)
    .then((res) => {
      console.log(res.data.res)
    })
    .catch((err) => {
      console.log(err)
    })
    output.value += contents + '\n'
    input.value = ''
  }
  const catchEnterKey = (event) => {
    console.log(event)
    return event.keyCode === 13 ? sendMessage() : 0
  }
  const my_styles = {
    width: "22px",
    height: "22px",
    zIndex: "1000000000000",
  }
  return (
    <div className="App">
      
{/* <button id="popup" style={{zIndex: "1000000000000"}}>
            <img style={my_styles} src="img/phone_1.png" alt="phone" />
        </button> */}

        <div id="block" style={{
              width:"20%", 
              right: "55px",
              bottom: "55px",
              position: 'fixed',
              backgroundColor: '#f2f1ed',
              padding: '2%',
              height: '60vh',
              display: 'none',
              zIndex:"10000000",
              }} >
            <div class="d-flex flex-column justify-content-around" action="">
                <h2>Чат</h2>
                <label for="msg"><b>Сообщение</b></label>
                <textarea readOnly rows="15" placeholder="Введите сообщение.." name="msg" required id="output"></textarea>
                <input type="text" onKeyDown={catchEnterKey} placeholder="Введите сообщение.." name="msg" required id="input" ></input>
                <button onClick={() => sendMessage()} type="button" class="btn bg-primary align-items-center d-flex" style={{width: "auto", color: "aliceblue"}}>Отправить</button>
            </div>
        </div>

	<div id="preloader" class="loader-wrapper">
		<div id="loading" class="loader"></div>
	</div>
	<nav id="mainNav" class="navbar navbar-default navbar-fixed-top">
		<div class="container d-flex align-center">

			<div class="navbar-header" style={{width: "20%"}}>
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
				<a class="logo" href="#"><img src="assets/img/logo.png" alt="logo"/> </a>
			</div>


			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav navbar-right">
					<li> <a class="page-scroll" href="#home">Главная</a> </li>
					<li> <a class="page-scroll" href="#about">О нас</a> </li>	
					<li> <a class="page-scroll" href="#team">Мастера</a> </li>
					<li> <a class="page-scroll" href="#price">Услуги</a> </li>
					<li> <a class="page-scroll" href="#screenshot">Наши работы</a> </li>
					<li> <a class="page-scroll" href="#contact">Контакты</a> </li>

				</ul>
			</div>
		</div>
	</nav>
	<header id="home" class="header">
		<div id="home-slider" class="carousel slide carousel-fade" data-ride="carousel">
			<div class="carousel-inner">
				<div class="item active" style={{backgroundImage: "url(assets/img/header2_2.jpg);",  backgroundRepeat: "no-repeat", backgroundPosition: "top", backgroundSize:"cover"}}>
					<div class="caption">
						<div class="caption-outer">
							<div class="header-text">
								<h1 class="animated wow fadeInDown">Салон креативного маникюра "Cherry Bomb" </h1>
								<p class="animated wow fadeInRight">Наши специалисты - это настоящие художники, которые превращают ваши ногти в холсты для уникальных произведений искусства. В нашем салоне креативного нейл-арта вы найдете команду профессионалов, которые горят страстью к красоте и индивидуальности. Мы стремимся создавать удивительные дизайны ногтей, которые подчеркивают вашу уникальность и стиль.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
	<section id="about" class="section-padding about3">

		<div class="container">
			<div class="col-sm-12 text-center">
				<div class="title">
					<div class="about-text mg">
						<h2>О нас</h2>
						<p>Добро пожаловать в уникальный мир креативного нейл-арта, где каждый ноготь становится холстом для наших мастеров-художников. Наш салон – это место, где красота и искусство сочетаются, чтобы создать неповторимые дизайны и выразить вашу индивидуальность.

						</p>
					</div>
				</div>
				<div class="img-about2">
					<img src="assets/img/about-img2.jpg" alt="about img2" />
				</div>
			</div>
		</div>

	</section>


	<section id="team" class="our-team2 parallax-window" data-parallax="scroll" data-image-src="assets/img/team-bg.jpg">
		<div class="container">
			<div class="row">
				<div class="text-center col-md-12">

					<div class="title">
						<div class="about-text mg">
							<h2>Наши мастера</h2>
						</div>
						<p>В нашем салоне креативного нейл-арта мы гордимся командой выдающихся мастеров, которые не только мастера своего дела, но и настоящие художники, вдохновленные созданием уникальных дизайнов ногтей.</p>
					</div>
					<div class="col-md-3">
						<div class="team-box">
							<div class="team-img"> <img src="assets/img/team1.jpg" alt="team1"  style={{borderRadius: "50%"}}/> </div>
							<div class="team-text">
								<h4>Мария</h4>
								<p>Топ мастер</p>
							</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="team-box">
							<div class="team-img"> <img src="assets/img/team2.jpg" alt="team2"  style={{borderRadius: "50%"}}/> </div>
							<div class="team-text">
								<h4>Арина</h4>
								<p>Топ мастер</p>
							</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="team-box">
							<div class="team-img"> <img src="assets/img/team3.jpg" alt="team3"  style={{borderRadius: "50%"}}/> </div>
							<div class="team-text">
								<h4>Лина</h4>
								<p>Начинающий мастер</p>
							</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="team-box">
							<div class="team-img"> <img src="assets/img/team4.jpg" alt="team4"  style={{borderRadius: "50%"}}/> </div>
							<div class="team-text">
								<h4>Лейла</h4>
								<p>Начинающий мастер</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="price" class="section-padding price">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="title">
						<div class="about-text mg">
							<h2>Услуги</h2>
						</div>
					</div>
					<div class="col-lg-12">

						<article class="pricing-column col-sm-4 col-md-4">
							<div class="inner-box">
								<div class="price-header text-center">
									<h3 class="price-title">Начинающий мастер</h3>
									<h2 class="price-no">От 3 тысяч тенге</h2>
								</div>
								<ul class="price-stats text-center">
									<li>Дизайн ногтей</li>
									<li>Гель-лак и акрил</li>
									<li>3D-дизайн</li>
								</ul>
								<div class="text-center"> <a href="" class="btn-wt-bdr3">Записаться</a> </div>
							</div>
						</article>
						
						<article class="pricing-column col-sm-4 col-md-4">
							<div class="inner-box active">
								<div class="price-header text-center">
									<h3 class="price-title active">Топ мастер</h3>
									<h2 class="price-no active">От 6 тысяч тенге</h2>
								</div>
								<ul class="price-stats text-center">
									<li>Дизайн ногтей</li>
									<li>Гель-лак и акрил</li>
									<li>3D-дизайн</li>
								</ul>
								<div class="text-center"> <a href="" class="btn-wt-bdr3">Записаться</a> </div>
							</div>
						</article>
						<article class="pricing-column col-sm-4 col-md-4">
							<div class="inner-box">
								<div class="price-header text-center">
									<h3 class="price-title">Мастер эксперт</h3>
									<h2 class="price-no">От 12 тысяч тенге</h2>
								</div>
								<ul class="price-stats text-center">
									<li>Дизайн ногтей</li>
									<li>Гель-лак и акрил</li>
									<li>3D-дизайн</li>
								</ul>
								<div class="text-center"> <a href="" class="btn-wt-bdr3">Записаться</a> </div>
							</div>
						</article>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section id="screenshot" class="Screenshot">
		<div class="container">
			<div class="row">
				<div class="title">
					<div class="about-text mg">
						<h2>Наши работы</h2></div>
						<p>Наши мастера-художники вдохновляются красотой и искусством, и каждая работа, созданная в нашем салоне, — это проявление творчества и мастерства. Взгляните на некоторые из наших недавних работ, чтобы увидеть, как мы превращаем ногти в уникальные художественные произведения:</p>
				</div>
				<div class="col-sm-12">
					<ul class="simplefilter">
						<li class="active" data-filter="all">Все</li>
						<li data-filter="1" class="color1">Простой</li>
						<li data-filter="2" class="color2">Необычный</li>
						<li data-filter="3" class="color3">3D-дизайн</li>
					</ul>

				</div>

			</div>
		</div>
		<div class="filtr-container baguetteBoxThree">
			<div class="col-sm-3 filtr-item" data-category="1, 5" data-sort="Busy streets">
				<a href="assets/img/gimg-1.jpg">
					<img class="img-responsive" src="assets/img/gimg-1.jpg" alt="sample image"/>
					<span class="item-desc">Все</span>
				</a>
			</div>
			<div class="col-sm-3 filtr-item" data-category="2, 5" data-sort="Luminous night">
				<a href="assets/img/gimg-2.jpg">
					<img class="img-responsive" src="assets/img/gimg-2.jpg" alt="sample image"/>
					<span class="item-desc">Простой</span>
				</a>
			</div>
			<div class="col-sm-3 filtr-item" data-category="1, 4" data-sort="City wonders">
				<a href="assets/img/gimg-3.jpg">
					<img class="img-responsive" src="assets/img/gimg-3.jpg" alt="sample image"/>
					<span class="item-desc">Необычный</span>
				</a>
			</div>
			<div class="col-sm-3 filtr-item" data-category="3" data-sort="In production">
				<a href="assets/img/gimg-4.jpg">
					<img class="img-responsive" src="assets/img/gimg-4.jpg" alt="sample image"/>
					<span class="item-desc"> 3D-дизайн</span>
				</a>
			</div>
			<div class="col-sm-3 filtr-item" data-category="2" data-sort="Industrial site">
				<a href="assets/img/gimg-5.jpg">
					<img class="img-responsive" src="assets/img/gimg-5.jpg" alt="sample image"/>
					<span class="item-desc">Простой</span>
				</a>
			</div>
			<div class="col-sm-3 filtr-item" data-category="3" data-sort="Peaceful lake">
				<a href="assets/img/gimg-6.jpg">
					<img class="img-responsive" src="assets/img/gimg-6.jpg" alt="sample image"/>
					<span class="item-desc">Необычный</span>
				</a>
			</div>
			<div class="col-sm-3 filtr-item" data-category="3" data-sort="Peaceful lake">
				<a href="assets/img/gimg-7.jpg">
					<img class="img-responsive" src="assets/img/gimg-7.jpg" alt="sample image"/>
					<span class="item-desc"> 3D-дизайн</span>
				</a>
			</div>
			<div class="col-sm-3 filtr-item" data-category="3" data-sort="Peaceful lake">
				<a href="assets/img/gimg-8.jpg">
					<img class="img-responsive" src="assets/img/gimg-8.jpg" alt="sample image"/>
					<span class="item-desc">3D-дизайн</span>
				</a>
			</div>
		</div>

	</section>
	<section id="testimonials" class="testimonials">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="title">
						<div class="about-text mg">
							<h2>Отзывы наших клиентов</h2>
						</div>
					</div>
					<div class="col-md-12">
						<div id="carousel-example-generic" class="carousel slide carousel-fade" data-ride="carousel">
							<ol class="carousel-indicators">
								<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
								<li data-target="#carousel-example-generic" data-slide-to="1"></li>
								<li data-target="#carousel-example-generic" data-slide-to="2"></li>
							</ol>
							<div class="carousel-inner">
								<div class="item active">
									<div class="caption">
										<div class="col-md-3">
											<h2><sup><i class="fa fa-quote-left"></i></sup>Анна</h2>
										</div>
										<div class="col-md-9">
											<p>Я в восторге от работы мастеров в этом салоне! Мне сделали невероятный 3D-дизайн, который просто поразил всех моих друзей. Очень приятное обслуживание и внимательный персонал.</p>
										</div>
									</div>
								</div>
								<div class="item">
									<div class="caption">
										<div class="col-md-3">
											<h2><sup><i class="fa fa-quote-left"></i></sup>Ирина</h2>
										</div>
										<div class="col-md-9">
											<p>Салон креативного нейл-арта - это мое укрытие. Я всегда получаю здесь не только красивые ногти, но и хорошее настроение. Мастера здесь настоящие художники!</p>
										</div>
									</div>
								</div>
								<div class="item">
									<div class="caption">
										<div class="col-md-3">
											<h2><sup><i class="fa fa-quote-left"></i></sup>Екатерина</h2>
										</div>
										<div class="col-md-9">
											<p>Мне никогда не нравились мои ногти, пока я не нашла этот салон. Они создали для меня настоящее произведение искусства на кончиках пальцев. Очень довольна результатом!</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	
	<section id="contact" class="section-padding contact-bg">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="title">
						<div class="about-text mg">
							<h2>Контакты</h2>
						</div>
					</div>
					<div class="contact-bg">
						<div class="col-md-12">
							<div class="contact-box col-md-6"> <i class="fa fa-location-arrow" aria-hidden="true"></i> Сейфуллина 78,
								<br/> Сатпаева 56 </div>
							<div class="contact-box2 col-md-6"> <i class="fa fa-envelope-o" aria-hidden="true"></i> cherrybomb@gmail.com
								<br/>cherrybomb_support@gmail.com</div>
							<div class="contact-box2 col-md-6"> <i class="fa fa-phone" aria-hidden="true"></i> +7 707 700 9629
								<br/> +7 707 700 9629</div>
							<div class="contact-box col-md-6"> <i class="fa fa-clock-o" aria-hidden="true"></i> Пн-Пт: 10:00- 19:00
							<br/> Cб-Вc:10:00-17:00</div>
						</div>
						<div class="col-md-12">

							<form name="ajax-form" id="contact-form2" action="https://formsubmit.io/send/90aa5128-c301-47bf-ae81-794fa4c07dda" method="post" class="contact-form">
								<input name="_redirect" type="hidden" id="name" value="http://zcube.in/flyapps/flyapp/index.html#contact"/>
								<div class="form-group">
									<input class="form-control" id="name1" name="name" placeholder="Ваше имя" type="text" value="" required /> </div>
								<div class="form-group">
									<input class="form-control" id="email" name="email" type="email" placeholder="Ваш email" value="" required/> </div>
								<div class="form-group">
									<input class="form-control" id="subject" name="subject" type="text" placeholder="Тема" value="" required/> </div>
								<div class="form-group">
									<textarea class="form-control" id="message" name="message" rows="5" placeholder="Сообщение" required></textarea>
								</div>
								<div class="row">
									<div class="col-xs-12">
										<div class="text-center">
											<button type="submit" class="btn btn-custom" id="send">Отправить</button>
										</div>
									</div>
								</div>
							</form>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	<div id="disqus_thread"></div>

	</section>
	<footer class="section-padding footer">
		<div class="container">
			<div class="col-md-12">
				<div class="footer-padding">
					<div class="row">
						<div class="col-md-3 col-sm-6">
							<h5><img src="img/logo.png" alt="logo"/></h5>
							<div class="text-f">
								Добро пожаловать в уникальный мир креативного нейл-арта, где каждый ноготь становится холстом для наших мастеров-художников. Наш салон – это место, где красота и искусство сочетаются, чтобы создать неповторимые дизайны и выразить вашу индивидуальность.


							</div>
						</div>
						<div class="col-md-3 col-sm-6">
							<h5>Адрес</h5>
							<ul class="list-unstyled">
								<li>Сейфуллина 47, Сатпаева 55, Алматы, Казахстан, +7 707 700 9629</li>
								<li><a href="#">cherrybomb_support@gmail.com</a></li>
							</ul>
						</div>
						<div class="col-md-3 col-sm-6">
							<h5>Телефон</h5>
							<ul class="list-unstyled">
								<li>Телефон: +7 777 777 7777</li>
							</ul>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	</footer>


	


            <button
            onClick={() => {toggleChatView()}}
            class='widget'
            style={{
              width:"60px", 
              height:"60px", 
              borderRadius:"100%", 
              position:"fixed",
              border: 'unset',
              right: "15px",
              bottom: "15px", 
              backgroundColor:"#31BD58",
              }}
              >
            <PhoneLogo height={35} width={35} />
            </button>
    </div>
    
  );
}

export default App;

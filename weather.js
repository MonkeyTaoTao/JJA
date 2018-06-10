(function(){
				var htmlFontSize = window.innerWidth/11.5
				document.querySelector('html').style.fontSize = htmlFontSize+'px';
				//窗口条件的时候重新执行
				window.onresize = function(){
					var htmlFontSize = window.innerWidth/11.5
					document.querySelector('html').style.fontSize = htmlFontSize+'px';
				}
			})()

function ajax(url,fn){
				//创建ajax对象
				var xhr = new XMLHttpRequest()
				//设置要请求的内容以及请求的方式GET/POST
				xhr.open('GET',url)
				//将请求内容和数据发送到服务器
				xhr.send()
				//监听状态的变化，当status==200以及readyState==4的时候，说明数据成功从服务器返回
				xhr.onreadystatechange = function(e){
	//				console.log(e)
	//				console.log(xhr.readyState)
	//				console.log(xhr.status)
	//				console.log(xhr.responseText)
					if(xhr.status==200&&xhr.readyState==4){
						fn(xhr)
					}
				}
				
			}
			
			
			function searchWeather(city){
				var weatherUrl = `https://free-api.heweather.com/s6/weather/now?location=${city}&key=9408407468564122977d5b91620ec0fd`
				var weatherUrl2 = `https://free-api.heweather.com/s6/weather/forecast?location=${city}&key=9408407468564122977d5b91620ec0fd`
				
				
				ajax(weatherUrl,function(xhr){
					console.log(xhr.responseText) 
					var obj = JSON.parse(xhr.responseText)
					var obj = obj.HeWeather6[0]
					if(obj.status !== "ok"){
						document.querySelector('.result').innerHTML = `<div style="color: red;">请正确输入城市!<div>`
					}else{
					document.querySelector('.result').innerHTML = `
							<div class="Tem">
								<div class="tem">${obj.now.tmp}°</div>
								<img src='https://cdn.heweather.com/cond_icon/${obj.now.cond_code}.png'>
							</div>
							<div class="Time">更新时间:
							${obj.update.loc}</div>
							<div class="Time" >天气情况:
							${obj.now.cond_txt}</div>
							<div class="more3">
								<div class="more1">
									<div class="more">体感温度:${obj.now.fl}°C</div>
									<div class="more">相对湿度:${obj.now.hum}%</div>
								</div>
								<div class="more2">
									<div class="more">风速:${obj.now.wind_spd}级</div>
									<div class="more">风向:${obj.now.wind_dir}向</div>
								</div>
							</div>
					
						
					`}
					
					console.log(obj)
					
				})
			}
			
//			document.querySelector('input').
//			if(event.keyCode==13) document.getElementById("cx").click()
			document.querySelector('button').onclick = function  () {
				var city = document.querySelector('input').value
				searchWeather(city)
			}
			
//			backup
//						<div>${obj.now.tmp}°</div>
//						<img src='https://cdn.heweather.com/cond_icon/${obj.now.cond_code}.png'>
//						<div >${obj.now.cond_txt}</div>
//						<div>更新时间:${obj.update.loc}</div>
//						
//						<div>体感温度:${obj.now.fl}°C</div>
//						<div>当前风速:${obj.now.wind_spd}级</div>
//						<div>相对湿度:${obj.now.hum}%</div>
//						
//						<div>风向:${obj.now.wind_dir}向</div>	
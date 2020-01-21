$(function () {
	$.get('https://json-project3.herokuapp.com/products', function (data) {
		let arr = data;
		console.log(arr)

		arr.forEach(function (bike) {
			$('.card-container').append(CreateCard(bike))
		});

		$('.showAll').on('click',function(){
			$('.card-container').html('');
			$('.active').removeClass('active');
			$('.showAll span').addClass('active');
			arr.forEach(function (bike) {
				$('.card-container').append(CreateCard(bike))
			});
		})


		let filteredMale = arr.filter(function (gender) {
			return gender.gender == 'MALE';
		})
		
		let filteredFemale = arr.filter(function (gender) {
			return gender.gender == 'FEMALE'
		})
		let filteredKross = arr.filter(function (brand) {
			return brand.brand == 'KROSS'
		})
		let filteredExplorer = arr.filter(function (brand) {
			return brand.brand == 'EXPLORER'
		})
		let filteredVisitor = arr.filter(function (brand) {
			return brand.brand == 'VISITOR'
		})
		let filteredForce = arr.filter(function (brand) {
			return brand.brand == 'FORCE'
		})
		let filteredIdeal = arr.filter(function (brand) {
			return brand.brand == 'IDEAL'
		})
		let filteredPony = arr.filter(function (brand) {
			return brand.brand == 'PONY'
		})
		let filteredEbike = arr.filter(function (brand) {
			return brand.brand == 'E-BIKES'
		})
		let filteredLeGrand = arr.filter(function (brand) {
			return brand.brand.includes('GRAND');
		})

		$('.showAllSpan').text(arr.length)
		$('.maleSpan').text(filteredMale.length)
		$('.femaleSpan').text(filteredFemale.length)
		$('.krossSpan').text(filteredKross.length)
		$('.explorerSpan').text(filteredExplorer.length)
		$('.visitorSpan').text(filteredVisitor.length)
		$('.forceSpan').text(filteredForce.length)
		$('.idealSpan').text(filteredIdeal.length)
		$('.ponySpan').text(filteredPony.length)
		$('.ebikeSpan').text(filteredEbike.length)
		$('.grandSpan').text(filteredLeGrand.length)


		$('.kross').on('click',function(){
			$('.card-container').html('');
			$('.active').removeClass('active');
			$('.kross span').addClass('active');
			filteredKross.forEach(function (bike) {
				$('.card-container').append(CreateCard(bike));
			})	
		})
		$('.pony').on('click',function(){
			$('.card-container').html('');
			$('.active').removeClass('active');
			$('.pony span').addClass('active');
			filteredPony.forEach(function (bike) {
				$('.card-container').append(CreateCard(bike));
			})
				
		})
		$('.ideal').on('click',function(){
			$('.card-container').html('');
			$('.active').removeClass('active');
			$('.ideal span').addClass('active');
			filteredIdeal.forEach(function (bike) {
				$('.card-container').append(CreateCard(bike));
			})	
		})
		$('.ebike').on('click',function(){
			$('.card-container').html('');
			$('.active').removeClass('active');
			$('.ebike span').addClass('active');
			filteredEbike.forEach(function (bike) {
				$('.card-container').append(CreateCard(bike));
			})	
		})
		$('.force').on('click',function(){
			$('.card-container').html('');
			$('.active').removeClass('active');
			$('.force span').addClass('active');
			filteredForce.forEach(function (bike) {
				$('.card-container').append(CreateCard(bike));
			})	
		})
		$('.explorer').on('click',function(){
			$('.card-container').html('');
			$('.active').removeClass('active');
			$('.explorer span').addClass('active');
			filteredExplorer.forEach(function (bike) {
				$('.card-container').append(CreateCard(bike));
			})	
		})
		$('.visitor').on('click',function(){
			$('.card-container').html('');
			$('.active').removeClass('active');
			$('.visitor span').addClass('active');
			filteredVisitor.forEach(function (bike) {
				$('.card-container').append(CreateCard(bike));
			})	
		})
		$('.grand').on('click',function(){
			$('.card-container').html('');
			$('.active').removeClass('active');
			$('.grand span').addClass('active');
			filteredLeGrand.forEach(function (bike) {
				$('.card-container').append(CreateCard(bike));
			})	
		})
		

		$('.male').on('click', function () {
			$('.card-container').html('');
			$('.active').removeClass('active');
			$('.male span').addClass('active');
			filteredMale.forEach(function (bike) {
				$('.card-container').append(CreateCard(bike));
			})
		})
		$('.female').on('click', function () {
			$('.card-container').html('');
			$('.active').removeClass('active');
			$('.female span').addClass('active');
			filteredFemale.forEach(function (bike) {
				$('.card-container').append(CreateCard(bike));
			})
		})

	})



	function CreateCard(bike) {
		return `<div class="col-md-4 card-holder">
		<a class='cardLink'>
		<img class='img img-responsive card-img' src="img/${bike.image}.png" alt="">
	<div class='card'>
		<h4>${bike.name}</h4>
		<span>${bike.price}</span>
	</div>
		</a>
	</div>`
	}



});

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <meta name="csrf-token" content="{{ csrf_token() }}">

        <!-- Sweetalert2 -->
        <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

        <script src="https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js"></script>

        <link href="{{asset ('frontend/plugins/slick-carousel/slick/slick.css')}}" rel="stylesheet">
       <link href="{{asset ('frontend/plugins/slick-carousel/slick/slick-theme.css')}}" rel="stylesheet">

<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.js"></script>
    <title>Laravel</title>


<body>

    <div id="app">
        <main-component></main-component>
    </div>
  <!--Start of Tawk.to Script-->
  <script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/61a0b9e09099530957f6c416/1fldtc66u';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->
    <script>
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
    </script>


    <script src="{{ mix('js/app.js') }}"></script>

    <script src="{{asset ('frontend/plugins/slick-carousel/slick/slick.min.js')}}"></script>
    <script src="{{asset ('frontend/js/script.js')}}"></script>

</body>

</html>

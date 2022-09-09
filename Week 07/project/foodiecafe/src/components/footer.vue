<template>
    <div>
  <div class="footer">
        <div class="footerbox">
            <ol>
            <a style="font-size: large; float: left; background-color:#00B4D8; color: #020351; border-radius: 9px;">Foodie Cafe</a>
            <a href="#find">Find us on</a>
            <a href="#youtube">Youtube</a>
            <a href="instagram">Instagram</a>
            <a href="help">Help</a>
            <a href="about">About us</a>
            <a href="privacy">Privacy Policy</a>
            <a href="Terms">Terms and Conditions</a>
           </ol>
           <div class="section08">
           <img class="paymentpic" src="../assets/BPAY_Pty_Ltd_logo.svg.png" alt="paymentpic">
           <img class="paymentpic" src="../assets/MasterCard_Logo.svg.png" alt="paymentpic">
           <img class="paymentpic" src="../assets/Visa.svg.png" alt="paymentpic">
           <img class="paymentpic" src="../assets/index.png" alt="paymentpic">
          </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: "FooterVue"
}
</script>

<style>
.footer{
            position: relative;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 100px;
            background-color: #020351;
            color:#00B4D8;
            text-align: center;
            margin-bottom: 0px;
        }
        .footerbox{
            display: block;
            color: #18A0FB;
            text-align: center;
            padding: 40px 20px;
            text-decoration: none;
            font-size: small;
            margin-top: 20px;
        }
        .footer a{
            text-decoration: none;
            margin-left: 20px;
        }
        .footer a:hover{
            background-color: #18A0FB;
            color: #020351;
        }
        .section08{
            display: flex;
        }
        .paymentpic{
            width: 20px;
            height: 20px;
            border-radius: 50%;
            float: left;
            padding: 18px 0px;
            margin-left: 70px;
        }
        @media screen and (max-width: 700px) {
            .Footer{
            position: relative;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 100px;
            background-color: #020351;
            color:#00B4D8;
            text-align: center;
            margin-bottom: 0px;
        }
          .footer{
            display: block;
            color: #18A0FB;
            text-align: center;
            padding: 16px 8px;
            text-decoration: none;
            font-size: small;
        }
        }
</style>
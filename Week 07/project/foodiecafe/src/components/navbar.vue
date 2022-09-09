<template>
  <!-- Navigation Bar -->
  <div class="navbar">
        <b>Foodie Cafe</b>
        <a href="#home">Home</a>
        <a href="#foodcategories">Food Categories</a>
        <a href="contact">Contact</a>
        <a href="favorites">Favorites</a>
        <div class="searchbar">
            <input type="text" placeholder="Search" name="search">
            <button type="submit"></button>
        </div>
    </div>
</template>

<script>
export default {
    name: "navbarVue"

}
</script>

<style>

        .navbar{
            overflow: hidden;
            background-color: #020351;
            position: fixed;
            width: 100%;
            height: 42px;
            top:0;
            z-index: 1;
        }
        .navbar a{
            float: left;
            display: block;
            color: #18A0FB;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-size: small;
        }
        .navbar b{
            float: left;
            display: block;
            text-align: center;
            text-decoration: none;
            font-size: larger;
            background-color:#00B4D8; 
            color: #020351; 
            border-radius: 15px; 
            padding: 9px 0px;
        }
        .navbar a:hover{
           background-color: #18A0FB;
           color: #020351;
        }
        .navbar a.active {
            background-color: #18A0FB;
            color: #020351;
        }
        .navbar .searchbar{
            float: right;
        }
        .navbar input[type=text]{
            padding: 6px;
            margin-top: 8px;
            font-size: small;
            border: none;
            border-radius: 10px;
        }
        .navbar .searchbar button{
            float: right;
            padding: 6px 10px;
            margin-top: 8px;
            margin-right: 16px;
            background-color:#18A0FB;
            font-size: small;
            border: none;
            cursor: pointer;
            border-radius: 10px;
        }
        .navbar .searchbar button:hover{
            background: aqua;
        }
        @media screen and (max-width: 700px) {
            
            .navbar{
                width: 100%;
                height: 300px;
                position: relative;
            }
            .navbar a{
                background-color: #020351;
                color: #00B4D8;
                display: block;
                padding: 12px;
                text-decoration: none;
            }
            .navbar b{
                display: block;
                text-decoration: none;
                text-align: center;
                font-size: larger;
                background-color:#00B4D8; 
                color: #020351; 
                padding: 10px 175px;
            }
            .navbar .searchbar button{
            float: right;
            padding: 6px 10px;
            margin-top: 8px;
            margin-right: 16px;
            background-color:#18A0FB;
            font-size: small;
            cursor: pointer;
            border-radius: 10px;
            }
            .navbar .searchbar{
                float: none;
            }
            .navbar a, .navbar input[type=text], .navbar .searchbar button{
                float: none;
                display: block;
                text-align: left;
                width: 100%;
                margin: 0;
                padding: 14px;
            }
            .navbar a.active {
                background-color: #18A0FB;
                color: #020351;
            }
            .navbar input[type=text]{
                border: 1px solid #020351;
            }
        }
</style>
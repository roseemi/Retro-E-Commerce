document.addEventListener('DOMContentLoaded', (loaded) => {
    console.log("Document is ready.");
});

/* Add global data to metadata, header and footer */
$(document).ready(function() {
    $(function () {
        $("#head").load("meta.html");
        $("#header").load("header.html");
        $("#footer").load("footer.html");
    });
    /* Change colour of the menu on scroll */
    $(function () {
        $(window).on("scroll", function() {
            if ($(window).scrollTop() > 50) {
                $(".main-menu").addClass("scrolled-menu");
            }
            else {
                $(".main-menu").removeClass("scrolled-menu");
            }
        })
    });
    /* Change the contents of the page in response to button clicks */
    $(".turnOnAbout").click(function (){
        var txt = ""; // = to empty
        txt += "<h2>About Us</h2>";
        txt += "<p>Beanie Babies are a line of stuffed toys created by American businessman H. Ty Warner, who founded Ty Inc. in 1986. The toys are stuffed with plastic pellets (\"beans\") rather than conventional soft stuffing. They come in many different forms, mostly animals.</p>";
        txt += "<p>Created in 1993, Beanie Babies emerged as a major fad and collectible during the second half of the 1990s. They have been cited as being the world's first Internet sensation in 1995. They were collected not only as toys, but also as a financial investment, owing to the high resale value of particular ones.</p>";
        txt += "<p>Beanie Babies began to emerge as popular collectibles in late 1995, and became a hot toy. The company's strategy of deliberate scarcity, producing each new design in limited quantity, restricting individual store shipments to limited numbers of each design and regularly retiring designs, created a huge secondary market for the toys and increased their popularity and value as a collectible.</p>";
        txt += "<p></p>";
        txt += "<p></p>";
        $("#display").html(txt);
    });
    $(".turnOnHistory").click(function (){
        var txt = ""; // = to empty
        txt += "<h2>Our History</h2>";
        txt += "<p>Beanie Babies were first introduced in 1993 by Ty Warner at the World Toy Fair in New York City, New York. Manufacturing began in 1994, and the toys were first sold in stores located in Chicago, Illinois for around $5 U.S. Dollars. There were nine original Beanie Babies: Legs the Frog, Squealer the Pig, Spot the Dog, Flash the Dolphin, Splash the Whale, Chocolate the Moose, Patti the Platypus, Brownie the Bear (later renamed \"Cubbie\"), and Pinchers the Lobster (with some tag errors labeled \"Punchers\"). Since 1994, Beanie Babies can only be found in small, specialty stores, such as gift stores and small toy stores. </p>";
        txt += "<p>At first, sales were relatively slow, and by 1995 many retailers refused to buy the bundles the toys were offered in, while other retailers refused to buy Beanie Babies entirely. Around the same time, Ty Inc. decided to restrict the quantity of Beanie Babies to be produced and distributed. The company began limiting the number of Beanie Babies a store could buy per month to 36 of each character. Ty Warner also decided to \"retire\" characters after a certain period of time, meaning the production of specific characters would eventually cease. Because these decisions created scarcity, they led to a significant increase in sales and started the trend of collecting and reselling Beanie Babies. Their popularity soon grew into a national craze in the US.</p>";
        txt += "<p>In 1996, Ty, Inc. released Teenie Beanies, a line of miniature versions of the original Beanie Babies. They were sold alongside McDonald's Happy Meals to celebrate the Happy Meal's 17th anniversary. They also partnered with other companies.</p>";
        txt += "<p>Ty, Inc. stopped producing Beanie Babies in December 1999, but high demand soon led them to reconsider. Production restarted in 2000 with a Beanie Baby named \"The Beginning.\" </p>";
        txt += "<p>In early 2008, Ty released a new version of Beanie Babies called Beanie Babies 2.0. The purchase of a Beanie Baby 2.0 provided its owner with a code to access an online Beanie Babies interactive website. The website has since been shut down.</p>";
        $("#display").html(txt);
    });
    $(".turnOnPrivacy").click(function (){
        var txt = ""; // = to empty
        txt += "<h2>Privacy Policy</h2>";
        txt += "<p>Ty strives to maintain an educational playground for kids and adults all over the world! We have put this section together to provide information for our visitors about privacy concerns, particularly concerns from a parent's perspective. With the attention being given to online safety, we would like to take advantage of this opportunity to address the following issues:</p>";
        txt += "<h3>1. What Type of Information We Collect and Why</h3>";
        txt += "<p>As with any site on the World Wide Web, any individual can observe the events taking place on Ty.com; however, in order to participate in the interactive portions of our website, Ty requires users to register. These interactive portions have a number of features that allow users to post information and write content to our site. By requiring users of our interactive features to register, we can work to make sure that Ty.com remains a safe environment for everyone. For example, in the event questionable material is posted on our site, we have the information necessary to track down the source of the messages and, if necessary, block that user from posting entries in the future.</p>";
        txt += "<p>In addition to information we expressly request, we also record certain non-personally identifiable information through the standard operation of Ty's Internet servers. This information allows us to keep our website running efficiently. The information that we record includes the browser (such as Netscape, Internet Explorer, etc.) and the operating system (such as Macintosh, Windows 95, etc.) being used by the visitor. Another use of this type of information includes the number of visits to the various pages in our site. E-mail addresses and other personally identifiable data about visits to this site are known only when voluntarily submitted.</p>";
        txt += "<h3>2.Your Options</h3>";
        txt += "<p>Ty strives to make its site user friendly, and we have worked hard to give you options about the information you provide to us, and about the activities in which your children may participate. Here are some of the ways we give you control:</p>";
        txt += "<p>When you register, you may select whether or not you wish to receive e-mail notices from us about exciting new additions to the Ty.com site. If you change your mind, you may return to your \"My Info\" profile at any time and update your choice.</p>";
        txt += "<p>For users who purchase product at Ty Store, you have the ability to opt out of receiving notices from us by sending us an e-mail to contact@ty.com</p>";
        txt += "<h3>3. How to Access, Change or Delete Information You Gave Us</h3>";
        txt += "<p>Any time you want, log into the Ty.com website, click the \"My Info\" link on the top of the home page and change your profile. Parents, don't worry. We won't let kids change their ages (and you can't either, so don't try to convince us this is your fourth 29th birthday!). But, if you find out that your child gave us the wrong age, please don't hesitate to contact us. We'll probably ask you a few questions to make sure you are really the parent, but we'll get it taken care of.</p>";
        $("#display").html(txt);
    });
});
/* Condense the nav menu on mobile */
function toggleMenu() {
    const menu = document.querySelector('#responsive-menu');

    if (menu.style.display === "none") {
        menu.style.display = "block";
    }
    else {
        menu.style.display = "none";
    }
}
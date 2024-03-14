
    var clipboard_trend = new Clipboard('.trend_variant .copy_variant');
                    clipboard_trend.on('success', function(e) {
                    var v_button = e.trigger; var nn; nn = $(v_button).attr('data-clipboard-text');$(v_button).parent().css('min-width', (12 + $(v_button).width()) + 'px');
                    var old_btn_html = $(v_button).html(); $(v_button).html('<b>Copied...<\/b>').css('color', '#4b26bb');
                    return setTimeout(function() {return $(v_button).html(old_btn_html);}, 900);
                    });
    (function() {
     var c, d, b, a;
     a=$(window);
     b=250;
     c=0;
     if(window.innerWidth<600) {
     b=300
     }
     if(window.innerWidth<500) {
     b=350;
     c=10
     }
     a.on("scroll", function(f) {
     if(a.scrollTop()>b) {
     $(".search_block").addClass("fixed_input");
     return $(".fixed_input").css("width", $("#fancy_symbols_wrapper").width()+c)
     }
     else {
     return $(".search_block").removeClass("fixed_input")
     }
     }
     );
     $("#some_random_variants .one_generated_variant").each(function() {
     return $(this).attr("onclick", "addToCursor($(this).text())")
     }
     );
     d=new Clipboard("#the_copy_btn");
     d.on("success", function() {
     $("#the_copy_btn").addClass("disabled").text("Copied!");
     return setTimeout(function() {
     return $("#the_copy_btn").removeClass("disabled").text("Copy")
     }
     , 1000)
     }
     );
     window.generateAnotherFancyVariants=function(g, j) {
     var f, e, i, h;
     h=$(g).attr("onclick");
     i=$(g).text();
     e=$("#first_letters").val();
     f=true;
     $(g).attr("onclick", false).text("In progress...");
     $("#some_random_variants").css("opacity", 0.4).css("min-height", $("#some_random_variants").outerHeight()-10);
     $("#some_random_variants").css("opacity", 0.4);
     return $.ajax("/generator/generateAnotherRandomVariants?fancy=1", {
     method:"POST", data: {
     nn: j, allow_symbols:f, first_letters:e
     }
     , success:function(k) {
     $("#some_random_variants").css("opacity", 1).html(k);
     $("#some_random_variants .one_generated_variant").each(function() {
     return $(this).attr("onclick", "addToCursor($(this).text())")
     }
     );
     $(g).attr("onclick", h).text("OK");
     return setTimeout(function() {
     return $(g).attr("onclick", h).text(i)
     }
     , 200)
     }
     , error:function(k, m, l) {
     alert("AJAX Error: "+m);
     $("#some_random_variants").css("opacity", 1);
     return $(g).attr("onclick", h).text(i)
     }
     }
     )
     }
     ;
     window.pickFancyVariant=function(e, f) {
     return $(e).attr("onclick", false).addClass("variant_in_progress")
     }
     ;
     window.addToCursor=function(i) {
     var f, g, j, e, h;
     $("#the_result").attr("readonly", "readonly");
     g=document.getElementById("the_result");
     if(document.selection) {
     g.focus();
     j=document.selection.createRange();
     j.text=i
     }
     else {
     if(g.selectionStart||g.selectionStart===0) {
     e=g.selectionStart;
     f=g.selectionEnd;
     g.value=g.value.substring(0, e)+i+g.value.substring(f, g.value.length)
     }
     else {
     g.value+=i
     }
     }
     h=g.value.length*2;
     g.focus();
     $("#the_result")[0].setSelectionRange(h, h);
     g.blur();
     updateTextareaSize(g);
     return setTimeout(function() {
     return $("#the_result").attr("readonly", false)
     }
     , 200)
     }
     ;
     window.addTextBeforeAll=function(e) {
     $("#the_result").val(e+$("#the_result").val());
     return updateTextareaSize(document.getElementById("the_result"))
     }
     ;
     window.updateTextareaSize=function(f) {
     var e;
     e=f.value.length;
     if(e>22) {
     f.rows=2
     }
     else {
     f.rows=1
     }
     return $("#the_copy_btn").css("height", $("#the_result").outerHeight())
     }
     ;
     window.copyTheResult=function(e) {
     return setTimeout(function() {
     if(window.innerWidth>1024) {
     document.getElementById("the_result").focus()
     }
     return document.getElementById("the_result").select()
     }
     , 200)
     }
     }
     
     ).call(this);

Với Create react app, bạn chỉ mất vài click để tạo 1 project React hoàn chỉnh, không yêu cầu kiến thức chuyên sâu gì về webpack hay babel. Nhưng nếu bạn vẫn chưa hài lòng với những tính năng mà CRA mang đến, ví dụ không hiện source-map CSS khi dev hay đơn giản là muốn cấu hình sâu hơn thì đã đến lúc bạn phải làm việc với Webpack rồi. Công ty mình toàn dùng webpack thôi chứ không có dùng Create react app :mrgreen:

Nếu bạn chưa có kiến thức gì về webpack thì có thể tham khảo những bài này của mình trước nha:
<ul>
 	<li><a href="https://xdevclass.com/webpack-sieu-toc-cau-hinh-dev-server-babel-loader-style-loader-file-loader/">Webpack siêu tốc 1: Cấu hình Dev Server, Babel Loader, Style Loader, File Loader</a></li>
 	<li><a href="https://xdevclass.com/webpack-sieu-toc-2-cau-hinh-typescript-alias-hash-bundle/">Webpack siêu tốc 2: Cấu hình Typescript, alias, hash bundle</a></li>
</ul>
Let's go!
<h2>Khởi tạo Project</h2>
<pre class="EnlighterJSRAW" data-enlighter-language="generic">yarn init --yes
hoặc
npm init --yes</pre>
<h2><span id="Cai_dat_Webpack_va_cac_style_loader">Cài đặt Webpack và các style loader</span></h2>
<pre class="EnlighterJSRAW" data-enlighter-language="generic">yarn add webpack webpack-cli webpack-dev-server style-loader css-loader sass sass-loader file-loader typescript ts-loader -D
</pre>
&nbsp;

&nbsp;
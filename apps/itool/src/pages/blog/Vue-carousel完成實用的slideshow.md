---
layout: '../../layouts/mdLayout.astro'
title: My page of content
---

# [Nuxt教學] Vue-carousel完成實用的slideshow!

![](https://i.imgur.com/CPAl91Y.jpg)

這次要介紹的**Vue-carousel**是屬於現成的Vue第三方套件，內建了一些常用的功能，若slideshow開發上沒有太特殊的使用需求，也推薦閱讀的您一同探索該套件的好用之處，接下來開始Vue-carousel的安裝與基礎設定吧!

### Step.1 安裝 Vue-carousel

```
npm install vue vue-template-compiler @chenfengyuan/vue-carousel
```

---

### Step.2 於plugins新增vue-carousel.js

```
import Vue from 'vue';
import VueCarousel from '@chenfengyuan/vue-carousel';

Vue.use(VueCarousel);
```

---

### Step.3 Nuxt.config.js 設定 Plugins

```
plugins: [
    {
      src:'~/plugins/vue-carousel.js',
    }
  ],
```

---

### Step.4 製作成 slider components

#### [vue-carousel樣式可參考官網](https://fengyuanchen.github.io/vue-carousel/)

---

### Step.5 參數設定

此套件提供許多參數可供設定，例如:

1.輪撥時設定方向(上下左右)

2.到下個幻燈片前延遲秒數

3.自動撥放

4.Hover時跳出頁面切換按鈕

細部參數設定可參考下方所示官方定義。
![](https://i.imgur.com/jdXMuaY.png)

---

### Step.6 開始使用components

可在layout或pages依照個人需求使用slider components

加入一些美麗圖片來看看實際的成果吧!

![](https://i.imgur.com/62C0kxC.jpg)

![](https://i.imgur.com/DDImVYy.jpg)

![](https://i.imgur.com/4tAjcPM.png)

---

### Step.7 注意事項

新手在使用方便的套件時，應注意對瀏覽器的**支援性**，免得花時間研究酷炫套件結
果無法在特定瀏覽器使用。

**官方有提供瀏覽器支援性，在此順便附上:**

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)
- Edge (latest)
- Internet Explorer 9+

---

### 結論

若未來想從事前端工程師相關職務，在開發上一定會碰到手刻或者使用現成套件，其實這個議題沒有標準答驗，一切依照專案需求決定即可，作者在近期開發的專案中使用到此套件覺得非常方便，如果你也是Vue的愛好者，歡迎來體驗Vue-carousel的箇中奧妙。

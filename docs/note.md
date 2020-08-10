# Note

## 對於第三方 library 的理解及功能簡介

**[styled-components](https://styled-components.com/)**

目前最受歡迎的的 CSS-in-JS 解決方案，其 CSS 的程式碼與原生的 CSS 幾乎無異，而且提供能夠傳入 props，讓撰寫 CSS 的彈性更高。

使用方法也很簡單，只要在一個 React component 中 import 這個套件，並使用 `styled.<tag-name>` 或 `styled(<Component>)` 就可以定義一個 Component，並且包含一些自定義的 style。

Example:

```
// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
```

**[axios](https://github.com/axios/axios)**

一個好用的 Promise-based 能夠使用 Ajax 請求遠端資料的套件，可以搭配 Promise API 一起使用，讓 Ajax 的彈性更高。

而且由於 axios API 的命名基於 HTTP method，所以在呼叫 REST API 時有利於提高程式碼的可讀性與可維護性。

Example:

```javascript
import axios from "axios";

axios
  .get("/user?ID=12345")
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
```

**[react-router-dom](https://reactrouter.com/web/guides/quick-start)**

在 React 應用中經常使用的 component 路由套件，用於讓 React component 以 SPA 的形式呈現。該套件提供多種不同的 Router，例如 `BrowserRouter` 使用的是 HTML5 History API，但是這個 Router 的問題在於所有請求的 URL 都必須映射至 index.html，否則會出現 HTTP 404。如果伺服器不能夠進行該設定或是瀏覽器氣版本較舊，則使用 `HashRouter`，使用像是 `example.com/#/user` 的 URL，而在 `#` 後的 URL 不會帶入請求中，所以每一次的請求都是回傳 index.html，然後再透過 react router 進行路由。

先前為了瞭解 react router dom 的原理寫了兩篇文章:

- [React-router-dom | 原理解析](https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/a-little-bit-of-react-router-dom-e5b809fcb127)
- [React-router-dom | 為了瞭解原理，那就來實作一個 react-router-dom 吧！](https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/implementing-react-router-dom-bf986888f2ce)

**[redux](https://redux.js.org/)**

在 React 應用中經常被用來管理狀態的函式庫，其概念是源自於 Facebook 的 Flux。使用 redux 的好處在於隨著應用程式越來越大，管理的狀態越來越多，redux 能夠讓存取狀態的邏輯非常清晰，而且讓狀態的存取是可被預測的。此外，redux 還提供了 middleware 的介面，讓我們能夠在 react 與 redux 之間加入 middleware，使用 redux 的彈性更高。例如在這個專案中使用的 `redux-saga`，便是能夠攔截 dispatch 至 redux 中的 action，讓我們能夠撰寫一些非同步的程式碼，最後仍然能夠狀態進入到 redux 中。

**[react-redux](https://react-redux.js.org/introduction/quick-start)**

react-redux 是一個讓 react 能夠與 redux 連結的橋樑，在 7.1 版本後提供了 hook API，讓 react-redux API 更加的好用且更容易閱讀。

如果不使用 react-redux 連結 redux，而是使用 Context API，則必須面對 component 容易觸發渲染的問題，在 [React 官方文件](https://zh-hant.reactjs.org/docs/hooks-reference.html#usecontext)中提到使用 `useContext` 的 component 會在 context 值更新時重新 render，所以我們得自己動手解決這個問題。但是 react-redux 幫我們事先處理 component 會重新 render 這個問題，讓觸發重新 render 的掌控權到了 react-redux 手上，使用 `useSelector` 的 component 只有在其取得的狀態發生改變時才會重新 render。

先前為了瞭解 react redux 的 Hook API 原理寫了這篇文章:

- [React-redux | 為了瞭解原理，那就來實作一個 React-redux 吧！](https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/developing-react-redux-from-zero-to-one-e27eddfbce39)

**[redux-saga](https://redux-saga.js.org/)**

redux-saga 是在 React 應用中，經常會拿來進行非同步處理的 redux middleware，而 redux-saga 使用的是 Generator API，其寫法與 async/await 有些類似，只是 function 的 `async` 關鍵字改成了 `*`，`await` 改成了 `yield`。

其背後的原理是來自 [Saga Pattern](http://www.cs.cornell.edu/andru/cs711/2002fa/reading/sagas.pdf)，為了解決 LLT (Long Live Transaction) 而被提出來的方法，而 redux-saga 的理念則是借鑑於 Saga Pattern。但是自從認識 Saga Pattern 以來，一直有一個問題是 Saga Pattern 其有一個重要的觀念是補償 (compensation)，亦即每個 Transaction 在失敗時都應該有一個相對應的 Compensation，但是我一直無法理解(也找不到)在原始碼哪個部分是屬於 Compensation，甚至為了解惑發了一個 [ISSUE#2057](https://github.com/redux-saga/redux-saga/issues/2057) 至 redux-saga 的 GitHub 上，不幸的是至今尚未解決這個問題，ISSUE 一直開著。

之前為了了解 redux saga 的原理寫了兩篇文章:

- [Redux-Saga | 原理解析](https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/understanding-redux-saga-148d7f070fa)
- [Redux-Saga | 為了瞭解原理，那就來實作一個 Redux-Saga 吧！](https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/implementing-your-own-redux-saga-37910ddafc37)

**[react-spring](https://www.react-spring.io/)**

react-spring 是一個 React 的 animation 建構函式庫，以 Hook 的形式把 animation 程式碼寫在 component 中，並且能夠快速簡易的模擬各種物理模式，寫出可讀性高的動畫特效。

但是在這個專案中使用的 react-spring v9 beta 版本，不使用 v8 穩定版的原因在於此專案使用了 typescript，如果使用 react-spring 的 Hook API，在型別推斷上會有些問題，所以改用 react-spring v9 beta。

[ISSUE] 然而，我撰寫的動畫在運行數次後，可能在某段程式碼發生了 race condition 的問題，會讓動畫炸掉，目前確切的原因不明。

**[react-icons](https://react-icons.github.io/react-icons/)**

提供許多 design system 的 icon 的函式庫，例如 material design、ant design 等。在 import 一個 icon 後，該 icon 以 component 的形式應用於 react component 中。

## 你在程式碼中寫註解的原則，遇到什麼狀況會寫註解?

之前拜讀過 Uncle Bob 所寫的 Clean code，他在書裡面有提到一句話「寫註解的其中一個動機，是因為程式碼寫的太糟糕」，所以我在寫程式時都盡可能地注意命名與程式碼邏輯，確認自己能夠寫出可讀性較高的程式碼。

**類別、函式的註解**

如果一個類別、函式的命名無法完全詮釋內部程式碼做的事情，**就會寫下註解**。但是，通常在寫 OOP 時都會我都會為類別跟函式加上註解，或是會為在 React 中定義的 event function 加上註解，因為我認為這兩種情況是比較容易會忘記當時為什麼要這樣設計。

**程式碼註解**

一段程式碼是呼叫某個函式時，由於函式的名稱並不是能夠完整的詮釋內部做的事情，所以會寫下為什麼要呼叫函式與函式用來做什麼的註解。我經常會為`useEffect` 中的程式碼加上註解，因為裡面的行為與 React 的 lifecycle 有關，所以有時會做一些神奇的操作，必須加上註解讓下次閱讀這段程式碼時不易忘記。

**需交接的程式碼**

如果這是一份**需要交接**的程式碼，我通常會盡可能地在類別、函式，或是上述提到的 event function、hook API 等等地方加上註解，
因為我有跟別人 code review 上千行專案的經驗，能夠體會沒有註解的心情，所以我會希望大部分的程式碼邏輯都能夠有一段相對應的註解。

## 在這份專案中你遇到的困難、問題，以及解決的方法?

**Q: 怎麼實作響應式 Hero List?**

為了達成響應式排版，原本考慮使用熟悉的 Flex Layout 實作排版，但是發現與原本想像中的不一樣，沒辦法寫出一段容易理解的 CSS。想到之前使用 Grid Layout 實作過類似的情境，因為同樣是 Card 與響應式的排版，所以上網看一下文件以及別人的範例，使用少量的 CSS 就能夠達成響應式的卡片排版。

```css
.hero-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  grid-gap: 4rem;

  z-index: 1;

  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  }
}
```

**Q: 怎麼測試 Saga function?**

這個問題也很有趣，原本我預期需要 mock axios 的 endpoint，然後自己建立一個 generator runner (如在[這篇文章](https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/understanding-redux-saga-148d7f070fa#a603)中提到的)用於測試 saga function。但是後來查到[一篇文章](https://ithelp.ithome.com.tw/articles/10224231)發現 saga function 可以用另一種角度來撰寫測試。

Generator 提供了一個非常好用的功能是**可以傳入參數到 Generator 中**，舉一個 [MDN 文件](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/function*)中的例子:

所以，透過傳入參數的這種方法，連 mock 都可以省略了，讓我們能夠非常愉快的測試 saga function。

```javascript
function* logGenerator() {
  console.log(1, yield);
}

var gen = logGenerator();
gen.next("pretzel"); // 1 pretzel
```

**Q: 怎麼優化 HeroList 與 HeroCard 的渲染?**

我認為這個問題是整個專案中遇到最有趣的問題，原本以為使用 `React.memo` 可以快速達成這個需求，但實際上沒有想像中的簡單，還不斷打開 [React Profiler](https://zh-hant.reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html) 重複確認 HeroList 有沒有被渲染。

一開始將 HeroList 與 HeroCard 都定義為 presentation component，以為只要固定 props 就可以快速完成這個需求。但是後來發現另一個需求「當在 "Hero Profile Page" 時要將現在所選中的 "Hero Card" 用不同的顏色或圖案標示出來」會影響優化的問題，因為 HeroCard 必須知道目前被選擇的 `heroId`。

儘管 HeroCard 不會 reflow，但是一定會被 re-render，因為如果使用 props 從 HeroPage -> HeroList -> HeroCard 傳遞，每一次連結改變時相對應的 `heroId` 也會跟著一起改變，所以這個策略是不可行的。

那麼如果在 HeroList 中取得 `heroId`呢？ (從根本上就不可行)

這也是不可行，因為不論是用 `useParams` 或是 `useSelector`，只要 `heroId` 改變，這兩個 Hook 都會造成 HeroList 強制被重新渲染。

所以，最後的解決方法是在 HeroCard 裡面使用 `useSelector`。但是一般來說，每一次點擊連結，在 redux 中的 `heroId` 都會改變，因此所有的 HeroCard 都會被重新渲染。當時我就想到之前在 trace react redux 的原始碼時發現 「`useSelector` 其實好像有能力可以讓我們自己定義該 component 要不要重新渲染」。

原因是 `useSelector` 是將重新渲染的控制權變成在它手上，`useSelector` 會判斷第一個參數 `selector` 所取得 redux 中的狀態前後是否改變，如果改變則調用使用 `useReducer` 創建的 `forceRender`。而 `useSelector` 還有第二個參數 `equalityFn`，這個參數比較少用到，但是它能夠讓我們可以**藉由 `equalityFn` 這個參數控制使用了 `useSelector` 的 component 要不要在使用的狀態改變時重新渲染**。

最後，在 HeroCard 撰寫以下程式碼，解決這個問題:

```typescript
const selectedHeroId = useSelector(
  (state: RootState) => state.heroes.selectedHeroId,
  (heroId, preHeroId) => heroId !== id && preHeroId !== id
);
```

以上程式碼的邏輯是，當點擊 HeroCard 時，只有上一個被選擇的 HeroCard 與這次被選擇的 HeroCard 會被強制渲染。

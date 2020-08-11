# Project Architecture

## Table of Contents

- [Page](#page)
- [Components](#components)
- [Redux](#redux)
- [API](#api)
- [Utility Function](#utility-function)
- [Testing](#testing)

## Page

**資料節結構**

在 `src/pages` 中會放入各個頁面的 .tsx 檔案，並且從 `src/components` 中 import 所需要的 component 作為頁面中的內容。

**專案中的頁面**

雖然在專案需求中說明需要兩個頁面，但是由於「點擊連結但不能重複渲染 HeroList」這個關鍵需求，所以 Page 只會有一個 HeroPage。在 HeroPage 中包含了 HeroList 與 HeroProfile 兩個 component，HeroProfile 則是以判斷 URL 是否有 hero id，並且以條件式渲染的方式處理 HeroProfile。

## Components

**資料節結構**

在 `src/components` 放的是 .tsx 的 React component 檔案，並且將可能會重複用到的 component 放至 `src/components/_Shared` 資料夾中。此外，每一個 component 可能會有 props 的傳遞，而 props 的型別定義則放置於 `src/components/types` 中，並以 `<component-name>.ts` 定義型別檔案的名稱。

**專案中的元件**

此專案主要的有以下四個 component:

- HeroList: 呈現數個 HeroCard 的元件，為一個 presentation component。
- HeroCard: 呈現一個超級英雄的圖片與名字，點擊後能夠顯示屬於該超級英雄的能力值 (profile)。
- HeroProfile: 呈現一位高級英雄的能力值，包含許多操作定義。
  - ProfileForm: 屬於 HeroProfile 中的元件，使用者能夠增加或減少一位超級英雄的能力值，並且儲存至資料庫中。

除了主要的 component 之外，還包括四個共用的 component:

- Loading: 載入時等待的動畫元件。
- Wave: 背景的動畫元件。
- Modal: 儲存至資料庫失敗時出現的彈跳視窗。
- WithFixContent: 一個能夠讓被包裹在其中的元件水平與垂直置中的元件。

## Redux

**資料夾結構**

在這個專案中使用 redux 作為管理狀態的系統，並將相關的檔案放置 `src/redux` 中。此外，為了能夠**區別各種屬於不同類別的狀態**，在 `src/redux` 中會將會以狀態類別建立新的資料夾，每一個資料夾中皆包含以下幾個檔案:

- `action.ts`: 定義 redux 的 action。
- `reducer.ts`: 定義 redux 的 reducer。
- `types.ts`: 定義 reducer 的 state type，以及定義 action 的 type。
- `saga.ts`: 定義 saga function。

**Root Saga**

由於隨著專案的擴大，可能會有多個管理不同類別狀態的 reducer，所以定義了 `root-reducer.ts`，使用 `combineReducers` 結合數個屬於不同類別狀態的 reducer，並將其作為 `createStore` 第一個參數。

**Middlewares: redux-saga 與 redux-logger**

此外，這個專案由於存在著 API 呼叫，所以需要讓 redux 能夠有能力處理非同步的 API 呼叫，因此使用了 [redux-saga](https://redux-saga.js.org/) 作為非同步處理的函式庫，並將進入點定義於 `root-saga.ts`。

另外為了在開發時方便，在開發模式下會載入 redux-logger，他會幫我們將每一次的 dispatch action 前後的狀態都攔截下來，並顯示在瀏覽器的 console 中。

## API

**資料夾結構**

REST API 主要以**資源名稱**作為以及 HTTP method 作為 endpoint，所以我們可以將各個資源定義於 `src/apis/<資源名稱>.ts` 中。

**Root API**

而這個專案使用的是 axios 作為呼叫 API 的函式庫，為了能夠管理 API 的進入點，將 URL 放置根目錄的 `.env` 檔案中，並且在 `root-api.ts` 使用 axios 創建 API 的進入點。並每一個資源的 API 檔案中讀取 `root-api.ts` 中定義的 API 進入點並建立 API。

例如，BASE_URL 是 example.com，所以會將 example.com 定義於 `.env`，並且在 `root-api.ts` 使用 axios 創建 API 的進入點。並且我們有一系列的資源為 heroes，所以定義了 `src/apis/heroes.ts`，並在這個檔案中定義 GET、PATCH 等等的 endpoint。

## Utility Function

專案中可能會使用到許多重複的 function，這些 function 會被歸類於 `src/utils` 中。

在這個專案中主要用到需要判斷 Hero 與 Hero Profile 的資料是否為空的，所以撰寫了 `isEmptyHeroData` 與 `isEmptyProfile` 兩個 function 分別處理判斷 Hero 與 Profile 是否為空的情況。

## Unit test

這個專案的測試放置於 `src/__tests__` 中，以 `src/` 中每個需要被測試的資料夾作為分類。例如，在 `src/` 中需要被測試的檔案分別被放置於 components、pages、redux、utils，所以在 **test** 中便會以召每個資料夾的名稱作為測試的分類。換句話說，**tests** 中的資料夾結構與主程式的資料夾結構近乎相同。

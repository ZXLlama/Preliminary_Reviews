document.addEventListener('DOMContentLoaded', () => {
    // 定義數據，包括每個組別的標題、副標題和幻燈片內容
    const data = {
        "groups": [
            {
                "modalText": "誰先喂？銅氨纖維！",
                "subtitle": "探討不同反應條件對實驗室製備銅氨纖維的影響",
                "slides": [
                    "纖維成形的方式原因?目的?實驗無預測?",
                    "研究方法可統整一圖表分析",
                    "正式DEMO時，要準備樣品文獻回顧要多說一點，觀眾不懂前因後果，緊張到觀眾聽不清，時間不足未能看完完整內容(要講敍過程形成狀態，標題錯亂)",
                    "研究結果未呈現過多過程介紹。結論不明?",
                    "符合科學探究原理，也有具體成果圖表",
                    "某老師遲到沒看到 笑死"
                ]
            },
            {
                "modalText": "強風吹拂",
                "subtitle": "風力發電",
                "slides": [
                    "發表人員順序建議調整加強表述能力",
                    "結論具有的價值與應用性?",
                    "內容缺照片輔助講解，觀眾較難理解，看出不同變因對結果影響，盼能看到原理，計算過程(內容不夠明確)",
                    "呈現尚稱完整",
                    "雖然研究的主題已有很多前人研究過了，但有具體成品及研究數據",
                    "某老師遲到沒看到 笑死"
                ]
            },
            {
                "modalText": "你說的黑不是黑，你說的白是什麼白",
                "subtitle": "探討不同食物、溫度、時間對酪胺酸酶的影響",
                "slides": [
                    "分析的柱狀圖建議加上箭頭標記",
                    "人體為36.5度C，目標為食材，應以36.5度C為測量主軸",
                    "圖表的標題應簡敍圖表內容和觀眾解釋吸光值意義，盼能看見推理過程",
                    "呈現尚稱完整，實驗過程未提太多",
                    "符合科學探究原理，也有具體成果圖表",
                    "某老師遲到沒看到 笑死"
                ]
            },
            {
                "modalText": "香蕉水肥",
                "subtitle": "測量香蕉水肥的指標",
                "slides": [
                    "實驗前需先參考相關文獻再設計方法",
                    "實驗前應找參考文獻才設計實驗且先行實驗預測",
                    "控制變因一缺少糖的重量，內容缺乏文獻背景，實驗規劃未完善看似見機行事",
                    "提出失敗實驗",
                    "沒有具體的成果，雖然失敗收場但學生仍有收穫",
                    "植物好壞(成長)還須考慮其它外在因素，條件未統一"
                ]
            },
            {
                "modalText": "風生水起",
                "subtitle": "探討手持風扇在不同的條件下的降溫效果",
                "slides": [
                    "實驗次數只有3次是否足夠",
                    "實驗的器材及過程相片要搭配數據說明，不要只有數據",
                    "未能看到裝置示意圖，結果分析應在圖表中解說各變因應呈現",
                    "有效實驗過程與分析，結論不明確",
                    "具體成果有呈現出來，研究主題有些簡單，但符合探究精神",
                    "實驗結果發現面積越大越好，其質量會影響轉動速率(未提到)"
                ]
            },
            {
                "modalText": "3D遊戲製作",
                "subtitle": "使用Blender建模場景並使用UE5打造遊戲",
                "slides": [
                    "應先說明整體故事架構，再解說設計",
                    "說明”特色”為重點，強調過程中的獨特性或困難解決",
                    "內容有趣可期待成品的產生",
                    "進度較慢，成果不多",
                    "已有出現的3D畫面，但稱不上”遊戲”，若有演示一段遊戲歷程會更好",
                    "遊戲設計的故事要先說明，程式使用的優點未說明且效果要達到什麼程度未說明"
                ]
            },
            {
                "modalText": "白板清潔的研究",
                "subtitle": "研究利用生活中的物品清潔白板",
                "slides": [
                    "實驗只做一次，未重複驗證",
                    "實驗前的參考文獻?設計實驗的依據，選小蘇打的原因?",
                    "結果較偏向定性試驗缺乏數據進行分析，因此未能看見後續發展",
                    "生活化研究，討論之方法有問題",
                    "沒有實際的數據，只用圖片說明，較缺說服性，但有實際用途供大家應用",
                    "實驗有講泡泡清潔較好，可以再加深討論什麼物質可以改善清潔白板"
                ]
            },
            {
                "modalText": "「金」「豌」，我想來點",
                "subtitle": "利用EDTA螯合劑與豌豆探討重金屬對植物的影響",
                "slides": [
                    "分析的長條圖建議加上箭頭標記",
                    "先說明影響預測，再以數據佐證",
                    "實驗結構完整口條清晰，盼能看到現象的原理",
                    "與環境有關，具吸引力研究架構完整，研究結果呈現清楚",
                    "有多樣的變因設計，也有具體數據圖表佐證",
                    "內容說明清楚，表格圖形適當，不足:數據說明其機器數據是否有誤差未說"
                ]
            },
            {
                "modalText": "外掛英豪",
                "subtitle": "製作特戰英豪的遊戲外掛",
                "slides": [
                    "製作方法只有一種未做比較",
                    "目標、預測、作法報告的方式與流程要前後呼應",
                    "非本科專長，未能看見成果，多是過程敍述",
                    "程式碼呈現過於專業，嘗試訓練AI",
                    "若有影片展示會更具說服力",
                    "應要說明程式的使用，設計內容未說明，學生看出有用心"
                ]
            },
            {
                "modalText": "茗茶秋毫",
                "subtitle": "用不同種方式泡茶對茶中咖啡因濃度的變化",
                "slides": [
                    "結論的迴歸直線未說明用途",
                    "泡茶的溫度含蓋日常所有飲用水溫？",
                    "口條清晰對內容的了解程度高。比例來源需文獻。折線圖畫法需改進。1:1~1:10並非等比。回歸曲線意義？",
                    "架構清晰，分析完整",
                    "有呈現具體實驗數據，結論之推理要酙酌的合理性",
                    "過程流暢，內容適度，溫度會影響咖啡因濃度，未提到什麼溫度濃度最為"
                ]
            },
            {
                "modalText": "花青大蘿蔔",
                "subtitle": "探討各種植物中的花青素在不同環境下的穩定性",
                "slides": [
                    "有效實驗過程，結論清楚",
                    "文獻應指出和研究相關原因部份，內容上多為已知並看見突破",
                    "項目研究，找參考文獻即可得知實驗的目的?",
                    "各組實驗都只有操作一次，代表性?",
                    "有初步的實驗數據，但預計的實因沒做完，期待把實驗做完整",
                    "內容有做出大量數據與圖片，報告內容說明清晰"
                ]
            },
            {
                "modalText": "米斯卡 莫斯卡 巴斯卡",
                "subtitle": "三微巴斯卡三角形係數及性質探究",
                "slides": [
                    "研究動機佳，有效之解析，結論不完整",
                    "引用文獻處應說明，否則較難看出學生自身發展",
                    "程式的說明上要更清楚",
                    "數學式表達應以方程式編輯器較佳",
                    "有說明，有示例，具體呈現去演示論證",
                    "用程式去解係數，並用舉例說明清楚，過程因再解釋會整後，最好有圖形說明會較好"
                ]
            },
            {
                "modalText": "用球的奧秘",
                "subtitle": "比較台灣和美國職棒用球的差異",
                "slides": [
                    "有趣的分析，結論清晰",
                    "學生基於自身熱情進行的研究，內容有趣，但量化分析有許多問題",
                    "論證的數據如何比較出差異?誤差值?",
                    "實驗數據差異小，是否有代表性?",
                    "有實驗結果具可信性，但主題稍偏簡單",
                    "力道未能固定，角度及球旋轉有很多因素有關"
                ]
            },
            {
                "modalText": "格致官網2.0",
                "subtitle": "嘗試改進格致網頁",
                "slides": [
                    "可惜實驗未完成，優化的研究很有勇氣",
                    "專題內容較像自主學習成果，缺乏參考資料的運用",
                    "先說明優化的項目與原因再比較差異會更好",
                    "頁面比例可再調整方便閱讀",
                    "有想法，但未呈現出優於現有網頁的具體樣貌",
                    "內容有較簡單易懂，但未有爆點或特別處，未提到前後的比較差異是否較好"
                ]
            },
            {
                "modalText": "二維正交空間簡諧運動圖形之探討",
                "subtitle": "如題，觀察二維簡諧運動產生的圖形",
                "slides": [
                    "懂得調整研究方法",
                    "結果≠結論，看到的現象分析背後原因",
                    "實驗的預測?結果佐證了什麼?",
                    "未參考文獻，實驗結驗有何用途?",
                    "若有實體的實驗成果，再佐以程式模擬會更完整",
                    "圖形因是代入數字後得到的，應用是什麼且目的看不出有何，應多找出相關研究來比例會整"
                ]
            },
            {
                "modalText": "齒輪比對風力發電電量的影響",
                "subtitle": "齒輪比",
                "slides": [
                    "有效深入主題(符合程度)，呈現清晰，說明根據有待商確",
                    "僅討論一變因，未能看見研究的全貌及實際效果",
                    "有何功能與應用?齒輪設計的實驗圖，齒比轉換的機制?1:40最佳的原因?",
                    "實驗數據偏少",
                    "此主題已有許多前人研究，過程符合科學探究",
                    "物體製作純手工，轉換越多確定影響，但轉換比要考慮重量"
                ]
            }
        ]
    };

    // 獲取所有按鈕、模態框、關閉按鈕和模態框鏈接按鈕
    const buttons = document.querySelectorAll('.nav-button');
    const modals = document.querySelectorAll('.modal');
    const spans = document.querySelectorAll('.close');
    const modalLinkButtons = document.querySelectorAll('.modal-link-button');

    // 為每個按鈕添加點擊事件監聽器
    buttons.forEach((button, index) => {
        button.addEventListener('click', (event) => {
            // 確保點擊的是按鈕或按鈕的 ::before 偽元素
            if (event.target === button || event.target === button.querySelector('::before')) {
                // 獲取對應組別的數據
                const group = data.groups[index];
                const modal = modals[index];
                const modalText = modal.querySelector('.modal-text');
                const modalSubtitle = modal.querySelector('.modal-subtitle');
                const carouselSlides = modal.querySelectorAll('.carousel-slide');
                const carouselDots = modal.querySelectorAll('.carousel-dot');
                const prevButton = modal.querySelector('.carousel-button.prev');
                const nextButton = modal.querySelector('.carousel-button.next');

                // 設置模態框的標題和副標題
                modalText.textContent = group.modalText;
                modalSubtitle.textContent = group.subtitle;
                // 設置幻燈片內容
                carouselSlides.forEach((slide, i) => {
                    slide.textContent = group.slides[i];
                });
                // 顯示模態框
                modal.style.display = "block";

                let currentIndex = 0;
                // 更新幻燈片內容
                const updateCarousel = () => {
                    carouselSlides.forEach((slide, i) => {
                        slide.classList.add('hidden');
                        setTimeout(() => {
                            slide.textContent = group.slides[(currentIndex + i) % group.slides.length];
                            slide.classList.remove('hidden');
                        }, 200); // 與 CSS 過渡時間匹配
                    });
                    carouselDots.forEach((dot, i) => {
                        dot.classList.toggle('active', i === currentIndex);
                    });
                };

                // 切換到下一張幻燈片
                const nextSlide = () => {
                    currentIndex = (currentIndex + 1) % group.slides.length;
                    updateCarousel();
                };

                // 切換到上一張幻燈片
                const prevSlide = () => {
                    currentIndex = (currentIndex - 1 + group.slides.length) % group.slides.length;
                    updateCarousel();
                };

                // 自動切換幻燈片
                let carouselInterval = setInterval(nextSlide, 5000);

                // 點擊圓點切換幻燈片
                carouselDots.forEach((dot, i) => {
                    dot.addEventListener('click', () => {
                        clearInterval(carouselInterval);
                        currentIndex = i;
                        updateCarousel();
                        carouselInterval = setInterval(nextSlide, 5000);
                    });
                });

                // 點擊下一個按鈕切換幻燈片
                nextButton.addEventListener('click', () => {
                    clearInterval(carouselInterval);
                    nextSlide();
                    carouselInterval = setInterval(nextSlide, 5000);
                });

                // 點擊上一個按鈕切換幻燋片
                prevButton.addEventListener('click', () => {
                    clearInterval(carouselInterval);
                    prevSlide();
                    carouselInterval = setInterval(nextSlide, 5000);
                });

                // 點擊模態框外部關閉模態框
                modal.addEventListener('click', (event) => {
                    if (event.target === modal) {
                        clearInterval(carouselInterval);
                        modal.style.display = 'none';
                    }
                });

                // 點擊關閉按鈕關閉模態框
                spans[index].onclick = function() {
                    clearInterval(carouselInterval);
                    modal.style.display = "none";
                };

                // 初始化幻燋片內容
                updateCarousel();
            }
        });
    });

    // 點擊關閉按鈕關閉模態框
    spans.forEach((span, index) => {
        span.onclick = function() {
            modals[index].style.display = "none";
        };
    });

    // 點擊窗口外部關閉模態框
    window.onclick = function(event) {
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    };
});

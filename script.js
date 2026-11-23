        // --- Helper: Trigger Animations (Animate.css) ---
        function animateElement(element, animationName) {
            if (!element) return;
            element.classList.remove('animate__animated', 'animate__' + animationName);
            void element.offsetWidth; // Force reflow
            element.classList.add('animate__animated', 'animate__' + animationName);
            element.addEventListener('animationend', function handler() {
                element.classList.remove('animate__animated', 'animate__' + animationName);
                element.removeEventListener('animationend', handler);
            });
        }

        // --- Translations ---
        const translations = {
            en: {
                standard: "Standard", algebra: "Algebra", graphing: "Graphing", trig: "Trigonometry",
                decimal: "Decimal", fraction: "Fraction", sci: "Powers of 10", exact_pi: "Keep π",
                light: "Light", dark: "Dark", custom: "Custom...",
                bg: "Background", calc: "Calculator", keys: "Keys", text: "Text", accent: "Accent", clear: "Clear (C)", radius: "Corner Radius",
                graph_theme: "Graph Theme", graph_line: "Line Color", graph_bg: "Graph BG", graph_grid: "Grid Color",
                plot: "Plot Graph", auto_scale: "Auto-Scale",
                cartesian: "Cartesian (Line)", quadrants: "Cartesian (Quadrants)", polar: "Polar",
                conv_utils: "Conversions & Utilities",
                cart_polar: "Cartesian → Polar", polar_cart: "Polar → Cartesian", rad_deg: "Rad → Deg", deg_rad: "Deg → Rad",
                op_opposite: "Opposite (a)", op_adjacent: "Adjacent (b)", op_hypotenuse: "Hypotenuse (c)", op_angle: "Angle θ (Degrees)",
                btn_create_tri: "Create Triangle",
                trig_ratios: "Trig Ratios:", trig_inverse: "Inverse (Arc):",
                trig_util_title: "Trigonometry Utility Calculator",
                deg_to_ratio: "Degrees to Ratio", ratio_to_deg: "Ratio to Degrees",
                btn_calculate: "Calculate",
                err_invalid_tri: "Invalid Triangle / Error", err_valid_tri: "Must be a valid right triangle.",
                undefined: "Undefined", indeterminate: "Indeterminate", error: "Error",
                eq: "+ Eq", solve: "Solve",
                placeholder_cart: "e.g., y = x^2",
                placeholder_polar: "e.g., r = 2*cos(theta)"
            },
            de: {
                standard: "Standard", algebra: "Algebra", graphing: "Grafik", trig: "Trigonometrie",
                decimal: "Dezimal", fraction: "Bruch", sci: "10er-Potenzen", exact_pi: "π behalten",
                light: "Hell", dark: "Dunkel", custom: "Benutzerdefiniert...",
                bg: "Hintergrund", calc: "Rechner", keys: "Tasten", text: "Text", accent: "Akzent", clear: "Löschen (C)", radius: "Eckenradius",
                graph_theme: "Grafik-Theme", graph_line: "Linienfarbe", graph_bg: "Grafik-HG", graph_grid: "Gitterfarbe",
                plot: "Grafik zeichnen", auto_scale: "Auto-Skalierung",
                cartesian: "Kartesisch (Linie)", quadrants: "Kartesisch (Quadranten)", polar: "Polar",
                conv_utils: "Umrechnungen & Hilfsmittel",
                cart_polar: "Kartesisch → Polar", polar_cart: "Polar → Kartesisch", rad_deg: "Rad → Grad", deg_rad: "Grad → Rad",
                op_opposite: "Gegenkathete (a)", op_adjacent: "Ankathete (b)", op_hypotenuse: "Hypotenuse (c)", op_angle: "Winkel θ (Grad)",
                btn_create_tri: "Dreieck erstellen",
                trig_ratios: "Trig. Verhältnisse:", trig_inverse: "Umkehrfunktion (Ark):",
                trig_util_title: "Trigonometrie-Hilfsrechner",
                deg_to_ratio: "Grad zu Verhältnis", ratio_to_deg: "Verhältnis zu Grad",
                btn_calculate: "Berechnen",
                err_invalid_tri: "Ungültiges Dreieck / Fehler", err_valid_tri: "Muss ein gültiges rechtwinkliges Dreieck sein.",
                undefined: "Undefiniert", indeterminate: "Unbestimmt", error: "Fehler",
                eq: "+ Glg", solve: "Lösen",
                placeholder_cart: "z.B. y = x^2",
                placeholder_polar: "z.B. r = 2*cos(theta)"
            },
            ru: {
                standard: "Обычный", algebra: "Алгебра", graphing: "Графики", trig: "Тригонометрия",
                decimal: "Десятичный", fraction: "Дробь", sci: "Степени 10", exact_pi: "Оставить π",
                light: "Светлая", dark: "Тёмная", custom: "Своя...",
                bg: "Фон", calc: "Калькулятор", keys: "Кнопки", text: "Текст", accent: "Акцент", clear: "Очистить (C)", radius: "Радиус углов",
                graph_theme: "Тема графика", graph_line: "Цвет линии", graph_bg: "Фон графика", graph_grid: "Цвет сетки",
                plot: "Построить график", auto_scale: "Авто-масштаб",
                cartesian: "Декартова (Линия)", quadrants: "Декартова (Квадранты)", polar: "Полярная",
                conv_utils: "Преобразования и утилиты",
                cart_polar: "Декартова → Полярная", polar_cart: "Полярная → Декартова", rad_deg: "Рад → Град", deg_rad: "Град → Рад",
                op_opposite: "Противолежащий (a)", op_adjacent: "Прилежащий (b)", op_hypotenuse: "Гипотенуза (c)", op_angle: "Угол θ (Градусы)",
                btn_create_tri: "Создать треугольник",
                trig_ratios: "Триг. отношения:", trig_inverse: "Обратные (Арк):",
                trig_util_title: "Утилита тригонометрии",
                deg_to_ratio: "Градусы в отношение", ratio_to_deg: "Отношение в градусы",
                btn_calculate: "Вычислить",
                err_invalid_tri: "Неверный треугольник / Ошибка", err_valid_tri: "Должен быть правильный прямоугольный треугольник.",
                undefined: "Не определено", indeterminate: "Неопределено", error: "Ошибка",
                eq: "+ Ур", solve: "Решить",
                placeholder_cart: "напр. y = x^2",
                placeholder_polar: "напр. r = 2*cos(theta)"
            },
            zh_cn: {
                standard: "标准", algebra: "代数", graphing: "绘图", trig: "三角函数",
                decimal: "小数", fraction: "分数", sci: "10的幂", exact_pi: "保留π",
                light: "浅色", dark: "深色", custom: "自定义...",
                bg: "背景", calc: "计算器", keys: "按键", text: "文本", accent: "强调色", clear: "清除 (C)", radius: "圆角",
                graph_theme: "图表主题", graph_line: "线条颜色", graph_bg: "图表背景", graph_grid: "网格颜色",
                plot: "绘制图形", auto_scale: "自动缩放",
                cartesian: "直角坐标 (直线)", quadrants: "直角坐标 (象限)", polar: "极坐标",
                conv_utils: "转换与实用工具",
                cart_polar: "直角 → 极坐标", polar_cart: "极 → 直角坐标", rad_deg: "弧度 → 角度", deg_rad: "角度 → 弧度",
                op_opposite: "对边 (a)", op_adjacent: "邻边 (b)", op_hypotenuse: "斜边 (c)", op_angle: "角度 θ (度)",
                btn_create_tri: "创建三角形",
                trig_ratios: "三角比:", trig_inverse: "反函数 (Arc):",
                trig_util_title: "三角函数实用计算器",
                deg_to_ratio: "角度转比例", ratio_to_deg: "比例转角度",
                btn_calculate: "计算",
                err_invalid_tri: "无效三角形 / 错误", err_valid_tri: "必须是有效的直角三角形。",
                undefined: "未定义", indeterminate: "不确定", error: "错误",
                eq: "+ 方程", solve: "求解",
                placeholder_cart: "例如: y = x^2",
                placeholder_polar: "例如: r = 2*cos(theta)"
            },
            zh_tw: {
                standard: "標準", algebra: "代數", graphing: "繪圖", trig: "三角函數",
                decimal: "小數", fraction: "分數", sci: "10的冪", exact_pi: "保留π",
                light: "淺色", dark: "深色", custom: "自訂...",
                bg: "背景", calc: "計算機", keys: "按鍵", text: "文字", accent: "強調色", clear: "清除 (C)", radius: "圓角",
                graph_theme: "圖表主題", graph_line: "線條顏色", graph_bg: "圖表背景", graph_grid: "網格顏色",
                plot: "繪製圖形", auto_scale: "自動縮放",
                cartesian: "直角座標 (直線)", quadrants: "直角座標 (象限)", polar: "極座標",
                conv_utils: "轉換與實用工具",
                cart_polar: "直角 → 極座標", polar_cart: "極 → 直角座標", rad_deg: "弧度 → 角度", deg_rad: "角度 → 弧度",
                op_opposite: "對邊 (a)", op_adjacent: "鄰邊 (b)", op_hypotenuse: "斜邊 (c)", op_angle: "角度 θ (度)",
                btn_create_tri: "建立三角形",
                trig_ratios: "三角比:", trig_inverse: "反函數 (Arc):",
                trig_util_title: "三角函數實用計算機",
                deg_to_ratio: "角度轉比例", ratio_to_deg: "比例轉角度",
                btn_calculate: "計算",
                err_invalid_tri: "無效三角形 / 錯誤", err_valid_tri: "必須是有效的直角三角形。",
                undefined: "未定義", indeterminate: "不確定", error: "錯誤",
                eq: "+ 方程式", solve: "求解",
                placeholder_cart: "例如: y = x^2",
                placeholder_polar: "例如: r = 2*cos(theta)"
            }
        };

        let currentLang = 'en';
        function t(key) { return translations[currentLang][key] || key; }

        function changeLanguage(lang) {
            currentLang = lang;
            document.documentElement.lang = lang === 'zh_cn' ? 'zh-CN' : (lang === 'zh_tw' ? 'zh-TW' : lang);
            
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[lang] && translations[lang][key]) {
                    el.textContent = translations[lang][key];
                }
            });
            
            updateGraphPlaceholder();
            recalculate();
            if (currentMode === 'trig') solveTriangle('btn');
        }

        function updateGraphPlaceholder() {
            const mode = document.getElementById('graphType').value;
            const input = document.getElementById('graphInput');
            if (mode === 'polar') {
                input.placeholder = t('placeholder_polar');
            } else {
                input.placeholder = t('placeholder_cart');
            }
        }

        // --- State Management ---
        let currentExpression = '';
        let currentMode = 'standard';

        const expDisplay = document.getElementById('expression');
        const resDisplay = document.getElementById('result');

        // --- UI Updates ---
        function updateDisplay() {
            expDisplay.textContent = currentExpression;
            expDisplay.scrollLeft = expDisplay.scrollWidth;
        }

        function insert(val) {
            if (resDisplay.textContent === t('error') || resDisplay.textContent === 'Error' || resDisplay.textContent === t('indeterminate')) clearAll();
            
            if (currentExpression === '0' && val !== '.' && !isNaN(val)) {
                currentExpression = val;
            } else {
                currentExpression += val;
            }
            updateDisplay();
        }

        function toggleSign() {
            if (currentExpression.startsWith('-')) {
                currentExpression = currentExpression.slice(1);
            } else if (currentExpression.length > 0) {
                currentExpression = '-' + currentExpression;
            } else {
                currentExpression = '-';
            }
            updateDisplay();
        }

        function addEquationLine() {
            if (currentExpression.length > 0 && !currentExpression.endsWith('\n')) {
                currentExpression += '\n';
                updateDisplay();
            }
        }

        function backspace() {
            currentExpression = currentExpression.slice(0, -1);
            updateDisplay();
        }

        function clearAll() {
            currentExpression = '';
            resDisplay.textContent = '0';
            updateDisplay();
        }

        function recalculate() {
            if (!currentExpression) return;
            if (currentMode === 'standard') calculateStandard();
            else if (currentMode === 'algebra') solveAlgebra();
        }

        // --- Mode Switching ---
        function switchMode(mode, e) {
            currentMode = mode;
            clearAll();
            
            document.querySelectorAll('details').forEach(d => d.open = false);

            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            if(e) e.target.classList.add('active');

            document.getElementById('mainDisplay').style.display = (mode === 'graphing' || mode === 'trig') ? 'none' : 'flex';
            document.getElementById('standardKeypad').style.display = mode === 'standard' ? 'grid' : 'none';
            document.getElementById('algebraKeypad').style.display = mode === 'algebra' ? 'grid' : 'none';
            document.getElementById('graphingUI').style.display = mode === 'graphing' ? 'flex' : 'none';
            document.getElementById('trigUI').style.display = mode === 'trig' ? 'flex' : 'none';

            animateElement(document.getElementById('calcBody'), 'fadeIn');

            if (mode === 'graphing') {
                updateGraphPlaceholder();
                resizeCanvas();
                plotGraph();
            }
            if (mode === 'trig') {
                resizeTrigCanvas();
                solveTriangle('btn');
            }
        }

        // --- Custom Formatting Functions ---
        function floatToFraction(val) {
            if (Number.isInteger(val)) return val.toString();
            if (!isFinite(val) || isNaN(val)) return val.toString();
            let sign = val < 0 ? -1 : 1;
            val = Math.abs(val);
            let tolerance = 1.0E-6;
            let h1 = 1, h2 = 0, k1 = 0, k2 = 1, b = val;
            do {
                let a = Math.floor(b);
                let aux = h1; h1 = a * h1 + h2; h2 = aux;
                aux = k1; k1 = a * k1 + k2; k2 = aux;
                b = 1 / (b - a);
            } while (Math.abs(val - h1 / k1) > val * tolerance && k1 <= 10000);
            if (k1 > 10000) return math.format(val, {precision: 10});
            if (k1 === 1) return (sign * h1).toString();
            return (sign * h1) + "/" + k1;
        }

        function toScientific(val) {
            if (typeof val !== 'number') return val.toString();
            if (val === 0) return '0';
            let str = val.toExponential(6);
            let [mantissa, exponent] = str.split('e');
            mantissa = parseFloat(mantissa).toString();
            let expSign = exponent[0] === '+' ? '' : '-';
            let expVal = Math.abs(parseInt(exponent));
            return `${mantissa}e${expSign}${expVal}`;
        }

        function formatResult(val, format) {
            if (val === undefined || val === null) return t('error');
            if (typeof val === 'string') return val;
            try {
                if (format === 'fraction') {
                    return floatToFraction(val);
                }
                
                let numVal = Number(val);
                if (!isFinite(numVal)) return t('undefined');
                if (isNaN(numVal)) return t('indeterminate');

                if (format === 'scientific' || Math.abs(numVal) >= 1e12 || (Math.abs(numVal) > 0 && Math.abs(numVal) < 1e-6)) {
                    return toScientific(numVal);
                }
                
                let str = parseFloat(numVal.toPrecision(12)).toString();
                if (str.length > 15) {
                    return toScientific(numVal);
                }
                return str;
            } catch (e) {
                return val.toString();
            }
        }

        // --- Math Logic ---
        function calculateStandard() {
            if (!currentExpression) return;
            let format = document.getElementById('outputFormat').value;
            try {
                if (format === 'exact_pi') {
                    let result = nerdamer(currentExpression).evaluate().toString();
                    resDisplay.textContent = result.replace(/pi/g, 'π');
                    animateElement(resDisplay, 'pulse');
                } else {
                    let result = math.evaluate(currentExpression);
                    
                    if (result === Infinity || result === -Infinity) {
                        resDisplay.textContent = t('undefined');
                        animateElement(resDisplay, 'headShake');
                    } else if (isNaN(result)) {
                        resDisplay.textContent = t('indeterminate');
                        animateElement(resDisplay, 'headShake');
                    } else {
                        resDisplay.textContent = formatResult(result, format);
                        animateElement(resDisplay, 'pulse');
                    }
                }
            } catch (e) {
                resDisplay.textContent = t('error');
                animateElement(resDisplay, 'headShake');
            }
        }

        function solveAlgebra() {
            if (!currentExpression) return;
            let lines = currentExpression.split('\n').map(l => l.trim()).filter(l => l.length > 0);
            let format = document.getElementById('outputFormat').value;
            try {
                let resultStr = '';
                if (lines.length > 1) {
                    let varsUsed = [];
                    if (currentExpression.includes('x')) varsUsed.push('x');
                    if (currentExpression.includes('y')) varsUsed.push('y');
                    if (currentExpression.includes('z')) varsUsed.push('z');
                    if (currentExpression.includes('k')) varsUsed.push('k');
                    let solutions = nerdamer.solveEquations(lines, varsUsed);
                    if (Array.isArray(solutions)) {
                        resultStr = solutions.map(sol => {
                            let varName = sol[0];
                            let val = sol[1];
                            if (format === 'decimal') val = nerdamer(val).evaluate().text('decimals');
                            else if (format === 'scientific') {
                                let num = parseFloat(nerdamer(val).evaluate().text('decimals'));
                                val = isNaN(num) ? val : toScientific(num);
                            } else if (format === 'exact_pi') val = val.replace(/pi/g, 'π');
                            return `${varName} = ${val}`;
                        }).join('\n');
                    } else resultStr = solutions.toString();
                } else {
                    let expr = lines[0];
                    if (expr.includes('=')) {
                        let variable = 'x';
                        if (expr.includes('y') && !expr.includes('x')) variable = 'y';
                        if (expr.includes('z') && !expr.includes('x') && !expr.includes('y')) variable = 'z';
                        if (expr.includes('k') && !expr.includes('x') && !expr.includes('y') && !expr.includes('z')) variable = 'k';
                        
                        let sol = nerdamer.solve(expr, variable).toString().replace(/^\[|\]$/g, '');
                        if (format === 'decimal') sol = sol.split(',').map(s => nerdamer(s).evaluate().text('decimals')).join(', ');
                        else if (format === 'scientific') sol = sol.split(',').map(s => {
                            let num = parseFloat(nerdamer(s).evaluate().text('decimals'));
                            return isNaN(num) ? s : toScientific(num);
                        }).join(', ');
                        else if (format === 'exact_pi') sol = sol.replace(/pi/g, 'π');
                        resultStr = `${variable} = ${sol}`;
                    } else {
                        let evaluated = nerdamer(expr).evaluate();
                        if (format === 'decimal') resultStr = evaluated.text('decimals');
                        else if (format === 'scientific') {
                            let num = parseFloat(evaluated.text('decimals'));
                            resultStr = isNaN(num) ? evaluated.toString() : toScientific(num);
                        } else if (format === 'exact_pi') resultStr = evaluated.toString().replace(/pi/g, 'π');
                        else resultStr = evaluated.toString();
                    }
                }
                resDisplay.textContent = resultStr;
                animateElement(resDisplay, 'pulse');
            } catch (e) { 
                resDisplay.textContent = t('error'); 
                animateElement(resDisplay, 'headShake');
            }
        }

        // --- Graphing Engine ---
        const canvas = document.getElementById('graphCanvas');
        const ctx = canvas.getContext('2d');
        
        let cx = 0, cy = 0;
        let scaleX = 30;
        let scaleY = 30;
        let stepX = 5;
        let stepY = 5;
        let stepR = 1;

        function resizeCanvas() {
            const container = canvas.parentElement;
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
            
            if (currentMode === 'graphing') {
                plotGraph();
            }
        }

        window.addEventListener('resize', () => {
            if (currentMode === 'graphing') resizeCanvas();
            if (currentMode === 'trig') { resizeTrigCanvas(); solveTriangle('btn'); }
        });

        function niceStep(x) {
            if (x === 0) return 1;
            let exponent = Math.floor(Math.log10(Math.abs(x)));
            let fraction = Math.abs(x) / Math.pow(10, exponent);
            let niceFraction;
            if (fraction <= 1) niceFraction = 1;
            else if (fraction <= 2) niceFraction = 2;
            else if (fraction <= 5) niceFraction = 5;
            else niceFraction = 10;
            return niceFraction * Math.pow(10, exponent);
        }

        function drawEmptyGrid() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            const graphBg = getComputedStyle(document.body).getPropertyValue('--graph-bg').trim();
            const gridColor = getComputedStyle(document.body).getPropertyValue('--graph-grid').trim();
            const textColor = getComputedStyle(document.body).getPropertyValue('--text-main').trim();
            const mutedColor = getComputedStyle(document.body).getPropertyValue('--text-muted').trim();
            const accentColor = getComputedStyle(document.body).getPropertyValue('--accent').trim();

            ctx.fillStyle = graphBg;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const type = document.getElementById('graphType').value;
            
            ctx.strokeStyle = gridColor;
            ctx.lineWidth = 1;
            ctx.fillStyle = mutedColor;
            ctx.font = '12px Tahoma';

            if (type === 'polar') {
                let maxR = (Math.min(canvas.width, canvas.height) / 2) / scaleX;
                for (let r = stepR; r <= maxR + 0.01; r += stepR) {
                    ctx.beginPath();
                    ctx.arc(cx, cy, r * scaleX, 0, 2 * Math.PI);
                    ctx.stroke();
                }
                for (let i = 0; i < 12; i++) {
                    let angle = (i * Math.PI) / 6;
                    ctx.beginPath();
                    ctx.moveTo(cx, cy);
                    ctx.lineTo(cx + Math.cos(angle) * maxR * scaleX, cy - Math.sin(angle) * maxR * scaleX);
                    ctx.stroke();
                }
                
                ctx.fillStyle = mutedColor;
                ctx.font = '12px Tahoma';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('O', cx + 8, cy + 8);
                ctx.fillStyle = textColor;
                ctx.beginPath();
                ctx.arc(cx, cy, 2, 0, Math.PI * 2);
                ctx.fill();
                
            } else {
                let decX = Math.max(0, -Math.floor(Math.log10(stepX)) + 1);
                if (decX > 4) decX = 4;
                let decY = Math.max(0, -Math.floor(Math.log10(stepY)) + 1);
                if (decY > 4) decY = 4;

                ctx.textAlign = 'center';
                ctx.textBaseline = 'top';
                
                let startX = Math.ceil((0 - cx) / scaleX / stepX) * stepX;
                for (let x = startX; cx + x * scaleX <= canvas.width; x += stepX) {
                    if (x === 0) continue;
                    let canvasX = cx + x * scaleX;
                    if (canvasX < 0 || canvasX > canvas.width) continue;

                    ctx.beginPath();
                    ctx.moveTo(canvasX, 0);
                    ctx.lineTo(canvasX, canvas.height);
                    ctx.stroke();
                    
                    let label = parseFloat(x.toFixed(decX));
                    if (Math.abs(label) >= 100000) label = label.toExponential(1);
                    ctx.fillText(label, canvasX, Math.max(5, Math.min(canvas.height - 20, cy + 5)));
                }

                ctx.textAlign = 'right';
                ctx.textBaseline = 'middle';
                let startY = Math.ceil((cy - canvas.height) / scaleY / stepY) * stepY;
                for (let y = startY; cy - y * scaleY >= 0; y += stepY) {
                    if (y === 0) continue;
                    let canvasY = cy - y * scaleY;
                    if (canvasY < 0 || canvasY > canvas.height) continue;

                    ctx.beginPath();
                    ctx.moveTo(0, canvasY);
                    ctx.lineTo(canvas.width, canvasY);
                    ctx.stroke();

                    let label = parseFloat(y.toFixed(decY));
                    if (Math.abs(label) >= 100000) label = label.toExponential(1);
                    ctx.fillText(label, Math.max(30, Math.min(canvas.width - 5, cx - 5)), canvasY);
                }
                
                ctx.strokeStyle = textColor;
                ctx.lineWidth = 2;
                
                if (cy >= 0 && cy <= canvas.height) {
                    ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(canvas.width, cy); ctx.stroke();
                }
                if (cx >= 0 && cx <= canvas.width) {
                    ctx.beginPath(); ctx.moveTo(cx, 0); ctx.lineTo(cx, canvas.height); ctx.stroke();
                }

                ctx.fillStyle = accentColor;
                ctx.font = 'bold 14px Tahoma';
                if (cy >= 20 && cy <= canvas.height) {
                    ctx.textAlign = 'right';
                    ctx.textBaseline = 'bottom';
                    ctx.fillText('X', canvas.width - 10, cy - 10);
                }
                if (cx >= 20 && cx <= canvas.width) {
                    ctx.textAlign = 'left';
                    ctx.textBaseline = 'top';
                    ctx.fillText('Y', cx + 10, 10);
                }

                if (cx >= 0 && cx <= canvas.width && cy >= 0 && cy <= canvas.height) {
                    ctx.fillStyle = mutedColor;
                    ctx.font = '12px Tahoma';
                    ctx.fillText('O', cx + 5, cy + 5);
                }
            }

            if (type === 'quadrants') {
                ctx.fillStyle = mutedColor;
                ctx.font = '14px Tahoma';
                ctx.textAlign = 'left';
                ctx.textBaseline = 'top';
                ctx.fillText('Q2', cx - 40, cy - 20);
                ctx.fillText('Q1', cx + 20, cy - 20);
                ctx.textBaseline = 'bottom';
                ctx.fillText('Q3', cx - 40, cy + 20);
                ctx.fillText('Q4', cx + 20, cy + 20);
            }
        }

        function plotGraph() {
            if (currentMode !== 'graphing') return;
            
            const type = document.getElementById('graphType').value;
            let input = document.getElementById('graphInput').value;
            const isAutoScale = document.getElementById('autoScaleToggle').checked;
            const graphLine = getComputedStyle(document.body).getPropertyValue('--graph-line').trim();

            let expression = input.includes('=') ? input.split('=')[1] : input;
            expression = expression.replace(/pi/g, 'Math.PI');

            let xMin = parseFloat(document.getElementById('graphXMin').value);
            let xMax = parseFloat(document.getElementById('graphXMax').value);
            let yMin = parseFloat(document.getElementById('graphYMin').value);
            let yMax = parseFloat(document.getElementById('graphYMax').value);

            if (isAutoScale) {
                let maxVal = -Infinity;
                let minVal = Infinity; 
                let hasPoints = false;
                try {
                    if (type === 'polar') {
                        for (let theta = 0; theta <= 2 * Math.PI; theta += 0.05) {
                            let r = math.evaluate(expression, { theta: theta, Math: Math });
                            if (isFinite(r)) {
                                hasPoints = true;
                                if (r > maxVal) maxVal = r;
                                if (r < minVal) minVal = r;
                            }
                        }
                        if (maxVal === -Infinity) maxVal = 10;
                        if (minVal === Infinity) minVal = -10;
                        
                        let rangeR = maxVal - minVal;
                        if (rangeR < 0.001) rangeR = 10;
                        
                        scaleX = (Math.min(canvas.width, canvas.height) * 0.4) / rangeR;
                        scaleY = scaleX; 
                        cx = canvas.width / 2;
                        cy = canvas.height / 2;
                        stepR = niceStep(rangeR / 5);
                    } else {
                        let sxMin = isNaN(xMin) ? -10 : xMin;
                        let sxMax = isNaN(xMax) ? 10 : xMax;
                        if (sxMin >= sxMax) sxMax = sxMin + 10;
                        
                        let rangeX = sxMax - sxMin;
                        cx = canvas.width / 2 - ((sxMin + sxMax) / 2) * (canvas.width * 0.8 / rangeX);
                        scaleX = (canvas.width * 0.8) / rangeX;

                        for (let x = sxMin; x <= sxMax; x += rangeX / 100) {
                            let y = math.evaluate(expression, { x: x, Math: Math });
                            if (isFinite(y)) {
                                hasPoints = true;
                                if (y > maxVal) maxVal = y;
                                if (y < minVal) minVal = y;
                            }
                        }
                        
                        if (!hasPoints) { maxVal = 10; minVal = -10; }
                        
                        if (!isNaN(yMin) && !isNaN(yMax)) {
                            let rangeY = yMax - yMin;
                            if (rangeY < 0.001) rangeY = 10;
                            cy = canvas.height / 2 + ((yMin + yMax) / 2) * (canvas.height * 0.8 / rangeY);
                            scaleY = (canvas.height * 0.8) / rangeY;
                        } else {
                            let rangeY = maxVal - minVal;
                            if (rangeY < 0.001) rangeY = 10;
                            cy = canvas.height / 2 + ((maxVal + minVal) / 2) * (canvas.height * 0.8 / rangeY);
                            scaleY = (canvas.height * 0.8) / rangeY;
                        }

                        stepX = niceStep(rangeX / 8);
                        stepY = niceStep((canvas.height * 0.8 / scaleY) / 6);
                    }
                } catch (e) {
                    scaleX = 30; scaleY = 30;
                    cx = canvas.width / 2;
                    cy = canvas.height / 2;
                }
            } else {
                scaleX = 30;
                scaleY = 30;
                cx = canvas.width / 2;
                cy = canvas.height / 2;
                stepX = 5;
                stepY = 5;
                stepR = 1;
            }

            scaleX = Math.max(0.0001, Math.min(10000, scaleX));
            scaleY = Math.max(0.0001, Math.min(10000, scaleY));

            drawEmptyGrid();

            ctx.strokeStyle = graphLine;
            ctx.lineWidth = 2; 
            ctx.beginPath();

            try {
                if (type === 'polar') {
                    let first = true;
                    let lastCanvasY = null;
                    for (let theta = 0; theta <= 2 * Math.PI; theta += 0.01) {
                        let r = math.evaluate(expression, { theta: theta, Math: Math });
                        if (!isFinite(r)) { first = true; lastCanvasY = null; continue; }
                        let x = r * Math.cos(theta);
                        let y = r * Math.sin(theta);
                        let canvasX = cx + x * scaleX;
                        let canvasY = cy - y * scaleY;
                        
                        if (lastCanvasY !== null && Math.abs(canvasY - lastCanvasY) > canvas.height * 2) {
                            first = true;
                        }
                        
                        if (first) { ctx.moveTo(canvasX, canvasY); first = false; }
                        else ctx.lineTo(canvasX, canvasY);
                        lastCanvasY = canvasY;
                    }
                } else {
                    let first = true;
                    let lastCanvasY = null;
                    let xLimitMin = isNaN(xMin) ? (0 - cx) / scaleX : xMin;
                    let xLimitMax = isNaN(xMax) ? (canvas.width - cx) / scaleX : xMax;
                    
                    if (!isAutoScale) {
                        xLimitMin = -20;
                        xLimitMax = 20;
                    }

                    for (let px = 0; px <= canvas.width; px += 1) {
                        let x = (px - cx) / scaleX;
                        if (x < xLimitMin || x > xLimitMax) { first = true; lastCanvasY = null; continue; }

                        let y = math.evaluate(expression, { x: x, Math: Math });
                        
                        if (!isFinite(y)) { first = true; lastCanvasY = null; continue; }
                        let canvasX = px;
                        let canvasY = cy - y * scaleY;
                        
                        if (lastCanvasY !== null && Math.abs(canvasY - lastCanvasY) > canvas.height) {
                            first = true;
                        }
                        
                        if (first) { ctx.moveTo(canvasX, canvasY); first = false; }
                        else ctx.lineTo(canvasX, canvasY);
                        lastCanvasY = canvasY;
                    }
                }
                ctx.stroke();
                animateElement(canvas, 'fadeIn'); 
            } catch (e) {
                console.error("Invalid equation");
            }
        }

        // --- Trigonometry Engine ---
        const trigCanvas = document.getElementById('trigCanvas');
        const tCtx = trigCanvas.getContext('2d');
        
        let trigHistory = [];
        let lastTrigState = { a: '', b: '', c: '', ang: '' };

        function resizeTrigCanvas() {
            const container = trigCanvas.parentElement;
            trigCanvas.width = container.clientWidth;
            trigCanvas.height = container.clientHeight;
        }

        function resetTrig() {
            document.getElementById('trigA').value = '';
            document.getElementById('trigB').value = '';
            document.getElementById('trigC').value = '';
            document.getElementById('trigAngle').value = '';
            trigHistory = [];
            lastTrigState = { a: '', b: '', c: '', ang: '' };
            document.getElementById('trigUndoBtn').disabled = true;
            drawTriangle();
            updateTrigResults(0, 0, 0, 0);
            animateElement(document.querySelector('.trig-results'), 'fadeIn');
        }

        function undoTrig() {
            if (trigHistory.length > 0) {
                const prev = trigHistory.pop();
                document.getElementById('trigA').value = prev.a;
                document.getElementById('trigB').value = prev.b;
                document.getElementById('trigC').value = prev.c;
                document.getElementById('trigAngle').value = prev.ang;
                lastTrigState = prev;
                solveTriangle('btn', true); 
                if (trigHistory.length === 0) document.getElementById('trigUndoBtn').disabled = true;
            }
        }

        function createTriangle() {
            let a = parseFloat(document.getElementById('trigA').value);
            let b = parseFloat(document.getElementById('trigB').value);
            let c = parseFloat(document.getElementById('trigC').value);
            let ang = parseFloat(document.getElementById('trigAngle').value);

            if (isNaN(a) && isNaN(b) && isNaN(c) && isNaN(ang)) {
                document.getElementById('trigA').value = 3;
                document.getElementById('trigB').value = 4;
                solveTriangle('btn');
            } else {
                solveTriangle('btn');
            }
        }

        function showTrigError() {
            document.getElementById('resSin').textContent = t('error');
            document.getElementById('resSin').className = 'error';
            document.getElementById('resCos').textContent = t('error');
            document.getElementById('resCos').className = 'error';
            document.getElementById('resTan').textContent = t('error');
            document.getElementById('resTan').className = 'error';
            document.getElementById('resArcSin').textContent = t('error');
            document.getElementById('resArcSin').className = 'error';
            document.getElementById('resArcCos').textContent = t('error');
            document.getElementById('resArcCos').className = 'error';
            document.getElementById('resArcTan').textContent = t('error');
            document.getElementById('resArcTan').className = 'error';

            const graphBg = getComputedStyle(document.body).getPropertyValue('--graph-bg').trim();
            tCtx.clearRect(0, 0, trigCanvas.width, trigCanvas.height);
            tCtx.fillStyle = graphBg;
            tCtx.fillRect(0, 0, trigCanvas.width, trigCanvas.height);
            
            tCtx.fillStyle = "#dc2626";
            tCtx.font = "bold 18px Tahoma";
            tCtx.textAlign = "center";
            tCtx.textBaseline = "middle";
            tCtx.fillText(t('err_invalid_tri'), trigCanvas.width/2, trigCanvas.height/2);
            tCtx.font = "14px Tahoma";
            tCtx.fillText(t('err_valid_tri'), trigCanvas.width/2, trigCanvas.height/2 + 30);
            
            animateElement(document.querySelector('.trig-results'), 'headShake');
        }

        function solveTriangle(source, isUndo = false) {
            let aStr = document.getElementById('trigA').value;
            let bStr = document.getElementById('trigB').value;
            let cStr = document.getElementById('trigC').value;
            let angStr = document.getElementById('trigAngle').value;

            let a = parseFloat(aStr);
            let b = parseFloat(bStr);
            let c = parseFloat(cStr);
            let ang = parseFloat(angStr);

            document.querySelectorAll('.trig-results span').forEach(span => span.className = '');

            if (a <= 0 || b <= 0 || c <= 0 || ang <= 0 || ang >= 90) {
                if (isNaN(a) && isNaN(b) && isNaN(c) && isNaN(ang)) return;
                return showTrigError();
            }

            if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
                if (Math.abs(a*a + b*b - c*c) > 0.01) {
                    return showTrigError();
                }
            } else if (!isNaN(a) && !isNaN(c) && c <= a) {
                return showTrigError();
            } else if (!isNaN(b) && !isNaN(c) && c <= b) {
                return showTrigError();
            }

            if (source === 'angle' && !isNaN(ang)) {
                let rad = ang * Math.PI / 180;
                if (!isNaN(a)) { 
                    c = a / Math.sin(rad);
                    b = a / Math.tan(rad);
                } else if (!isNaN(b)) { 
                    a = b * Math.tan(rad);
                    c = b / Math.cos(rad);
                } else if (!isNaN(c)) { 
                    a = c * Math.sin(rad);
                    b = c * Math.cos(rad);
                }
            } else if ((source === 'a' || source === 'b' || source === 'c') && !isNaN(a) && !isNaN(b)) {
                c = Math.sqrt(a*a + b*b);
                ang = Math.atan2(a, b) * 180 / Math.PI;
            } else if (!isNaN(a) && !isNaN(c) && c > a) {
                b = Math.sqrt(c*c - a*a);
                ang = Math.asin(a/c) * 180 / Math.PI;
            } else if (!isNaN(b) && !isNaN(c) && c > b) {
                a = Math.sqrt(c*c - b*b);
                ang = Math.acos(b/c) * 180 / Math.PI;
            }

            if (!isNaN(a)) document.getElementById('trigA').value = a.toFixed(2);
            if (!isNaN(b)) document.getElementById('trigB').value = b.toFixed(2);
            if (!isNaN(c)) document.getElementById('trigC').value = c.toFixed(2);
            if (!isNaN(ang)) document.getElementById('trigAngle').value = ang.toFixed(2);

            drawTriangle(a, b, c, ang);
            updateTrigResults(a, b, c, ang);
            
            if (source !== 'btn') animateElement(document.querySelector('.trig-results'), 'fadeIn');

            if (!isUndo) {
                const current = { 
                    a: document.getElementById('trigA').value, 
                    b: document.getElementById('trigB').value, 
                    c: document.getElementById('trigC').value, 
                    ang: document.getElementById('trigAngle').value 
                };
                if (JSON.stringify(current) !== JSON.stringify(lastTrigState)) {
                    trigHistory.push(lastTrigState);
                    lastTrigState = current;
                    document.getElementById('trigUndoBtn').disabled = false;
                }
            }
        }

        function updateTrigResults(a, b, c, ang) {
            if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(ang)) return;
            const rad = ang * Math.PI / 180;
            document.getElementById('resSin').textContent = Math.sin(rad).toFixed(4);
            document.getElementById('resCos').textContent = Math.cos(rad).toFixed(4);
            
            let tanStr = (Math.abs(ang % 180) === 90) ? t('undefined') : Math.tan(rad).toFixed(4);
            document.getElementById('resTan').textContent = tanStr;
            
            document.getElementById('resArcSin').textContent = (Math.asin(a/c) * 180 / Math.PI).toFixed(2) + '°';
            document.getElementById('resArcCos').textContent = (Math.acos(b/c) * 180 / Math.PI).toFixed(2) + '°';
            document.getElementById('resArcTan').textContent = (Math.atan(a/b) * 180 / Math.PI).toFixed(2) + '°';
        }

        function drawTriangle(a, b, c, ang) {
            tCtx.clearRect(0, 0, trigCanvas.width, trigCanvas.height);
            
            const graphBg = getComputedStyle(document.body).getPropertyValue('--graph-bg').trim();
            const graphLine = getComputedStyle(document.body).getPropertyValue('--graph-line').trim();
            const textColor = getComputedStyle(document.body).getPropertyValue('--text-main').trim();

            tCtx.fillStyle = graphBg;
            tCtx.fillRect(0, 0, trigCanvas.width, trigCanvas.height);

            let drawA = a || 100;
            let drawB = b || 150;
            const padding = 40;
            const maxW = trigCanvas.width - padding * 2;
            const maxH = trigCanvas.height - padding * 2;
            
            let scaleFactor = Math.min(maxW / drawB, maxH / drawA);
            let w = drawB * scaleFactor;
            let h = drawA * scaleFactor;

            let p1 = {x: padding, y: trigCanvas.height - padding};
            let p2 = {x: padding + w, y: trigCanvas.height - padding};
            let p3 = {x: padding + w, y: trigCanvas.height - padding - h};

            tCtx.beginPath();
            tCtx.moveTo(p1.x, p1.y);
            tCtx.lineTo(p2.x, p2.y);
            tCtx.lineTo(p3.x, p3.y);
            tCtx.closePath();
            tCtx.fillStyle = "rgba(59, 130, 246, 0.1)";
            tCtx.fill();
            tCtx.strokeStyle = graphLine;
            tCtx.lineWidth = 3;
            tCtx.stroke();

            const sqSize = 15;
            tCtx.beginPath();
            tCtx.moveTo(p2.x - sqSize, p2.y);
            tCtx.lineTo(p2.x - sqSize, p2.y - sqSize);
            tCtx.lineTo(p2.x, p2.y - sqSize);
            tCtx.strokeStyle = textColor;
            tCtx.lineWidth = 2;
            tCtx.stroke();

            tCtx.beginPath();
            tCtx.arc(p1.x, p1.y, 30, -Math.atan2(h, w), 0);
            tCtx.stroke();

            tCtx.fillStyle = textColor;
            tCtx.font = '14px Tahoma';
            tCtx.textAlign = 'center';
            tCtx.textBaseline = 'middle';
            tCtx.fillText('(θ)', p1.x + 40, p1.y - 10);
            tCtx.textAlign = 'left';
            tCtx.fillText('(a)', p2.x + 10, (p2.y + p3.y) / 2);
            tCtx.textAlign = 'center';
            tCtx.textBaseline = 'top';
            tCtx.fillText('(b)', (p1.x + p2.x) / 2, p1.y + 10);
            tCtx.textBaseline = 'bottom';
            tCtx.fillText('(c)', (p1.x + p3.x) / 2 - 10, (p1.y + p3.y) / 2 - 10);
        }

        // --- Trig Utility Logic ---
        function calcDegToRatio() {
            let degInput = document.getElementById('utilDegIn').value;
            let deg = parseFloat(degInput);
            let out = document.getElementById('utilResult');

            if (isNaN(deg)) {
                out.textContent = "Please enter a valid angle in degrees.";
                return;
            }

            let rad = deg * Math.PI / 180;
            let sin = Math.sin(rad).toFixed(4);
            let cos = Math.cos(rad).toFixed(4);
            let tan = (Math.abs(deg % 180) === 90) ? t('undefined') : Math.tan(rad).toFixed(4);

            out.innerHTML = `sin(${deg}°) = ${sin}<br>cos(${deg}°) = ${cos}<br>tan(${deg}°) = ${tan}`;
            animateElement(out, 'pulse');
        }

        function calcRatioToDeg() {
            let valInput = document.getElementById('utilRatioIn').value;
            let func = document.getElementById('utilFuncSel').value;
            let val = parseFloat(valInput);
            let out = document.getElementById('utilResult');

            if (isNaN(val)) {
                out.textContent = "Please enter a valid ratio value.";
                return;
            }

            let rad, deg;
            if (func === 'asin') {
                if (val < -1 || val > 1) return out.textContent = "arcsin requires a value between -1 and 1.";
                rad = Math.asin(val);
            } else if (func === 'acos') {
                if (val < -1 || val > 1) return out.textContent = "arccos requires a value between -1 and 1.";
                rad = Math.acos(val);
            } else if (func === 'atan') {
                rad = Math.atan(val);
            }

            deg = rad * 180 / Math.PI;
            out.innerHTML = `${func}(${val}) = <span style="font-size:1.2rem;">${deg.toFixed(4)}°</span>`;
            animateElement(out, 'pulse');
        }

        // --- Conversion Tools Logic ---
        function cartToPolar() {
            let x = parseFloat(document.getElementById('convX').value);
            let y = parseFloat(document.getElementById('convY').value);
            if (isNaN(x) || isNaN(y)) return showConv("Please enter valid X and Y.");
            let r = Math.sqrt(x*x + y*y);
            let theta = Math.atan2(y, x);
            document.getElementById('convResult').innerText = `r = ${r.toFixed(4)}, θ = ${theta.toFixed(4)} rad`;
            animateElement(document.getElementById('convResult'), 'pulse');
        }

        function polarToCart() {
            let r = parseFloat(document.getElementById('convX').value);
            let theta = parseFloat(document.getElementById('convY').value);
            if (isNaN(r) || isNaN(theta)) return showConv("Please enter valid R and Theta.");
            let x = r * Math.cos(theta);
            let y = r * Math.sin(theta);
            document.getElementById('convResult').innerText = `x = ${x.toFixed(4)}, y = ${y.toFixed(4)}`;
            animateElement(document.getElementById('convResult'), 'pulse');
        }

        function radToDeg() {
            let rad = parseFloat(document.getElementById('convY').value) || parseFloat(document.getElementById('convX').value);
            if (isNaN(rad)) return showConv("Enter a radian value in Theta/Y or X/R.");
            let deg = rad * (180 / Math.PI);
            document.getElementById('convResult').innerText = `${rad} rad = ${deg.toFixed(4)}°`;
            animateElement(document.getElementById('convResult'), 'pulse');
        }

        function degToRad() {
            let deg = parseFloat(document.getElementById('convY').value) || parseFloat(document.getElementById('convX').value);
            if (isNaN(deg)) return showConv("Enter a degree value in Theta/Y or X/R.");
            let rad = deg * (Math.PI / 180);
            document.getElementById('convResult').innerText = `${deg}° = ${rad.toFixed(4)} rad`;
            animateElement(document.getElementById('convResult'), 'pulse');
        }

        function showConv(msg) { 
            document.getElementById('convResult').innerText = msg; 
            animateElement(document.getElementById('convResult'), 'headShake');
        }

        // --- Custom Theme Logic ---
        const defaultCustomTheme = {
            bg: '#f0f2f5',
            calc: '#ffffff',
            key: '#ffffff',
            text: '#1a1a1a',
            accent: '#2563eb',
            clear: '#dc2626',
            radius: '8',
            graphLine: '#2563eb',
            graphBg: '#f8f9fa',
            graphGrid: '#d1d5db',
            cross1: '#2563eb',
            cross2: '#3b82f6'
        };

        let themeHistory = [];
        const maxHistory = 30;
        let lastCommittedState = { ...defaultCustomTheme };

        function toggleCustomPanel() {
            const panel = document.getElementById('customPanel');
            if (panel.style.display === 'grid' || panel.style.display === '') {
                panel.style.display = 'none';
                if (document.getElementById('themeSelect').value === 'custom') {
                    document.getElementById('themeSelect').value = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
                }
            } else {
                panel.style.display = 'grid';
                animateElement(panel, 'fadeInDown');
            }
        }

        function getCurrentThemeState() {
            return {
                bg: document.getElementById('colorBg').value,
                calc: document.getElementById('colorCalc').value,
                key: document.getElementById('colorKey').value,
                text: document.getElementById('colorText').value,
                accent: document.getElementById('colorAccent').value,
                clear: document.getElementById('colorClear').value,
                radius: document.getElementById('radiusSlider').value,
                graphLine: document.getElementById('colorGraphLine').value,
                graphBg: document.getElementById('colorGraphBg').value,
                graphGrid: document.getElementById('colorGraphGrid').value,
                cross1: document.getElementById('colorCross1').value,
                cross2: document.getElementById('colorCross2').value
            };
        }

        function applyThemeState(state) {
            document.getElementById('colorBg').value = state.bg;
            document.getElementById('colorCalc').value = state.calc;
            document.getElementById('colorKey').value = state.key;
            document.getElementById('colorText').value = state.text;
            document.getElementById('colorAccent').value = state.accent;
            document.getElementById('colorClear').value = state.clear;
            document.getElementById('radiusSlider').value = state.radius;
            document.getElementById('colorGraphLine').value = state.graphLine || defaultCustomTheme.graphLine;
            document.getElementById('colorGraphBg').value = state.graphBg || defaultCustomTheme.graphBg;
            document.getElementById('colorGraphGrid').value = state.graphGrid || defaultCustomTheme.graphGrid;
            document.getElementById('colorCross1').value = state.cross1 || defaultCustomTheme.cross1;
            document.getElementById('colorCross2').value = state.cross2 || defaultCustomTheme.cross2;
            
            applyCustomTheme();
        }

        function handleSliderChange() {
            document.getElementById('radiusVal').textContent = document.getElementById('radiusSlider').value + 'px';
            applyCustomTheme();
        }

        function generateBackgroundDecorations() {
            const color1 = document.getElementById('colorCross1').value;
            const color2 = document.getElementById('colorCross2').value;
            
            let svgContent = '';
            const width = 1000;
            const height = 1000;
            const count = 40; // Number of crosses

            for (let i = 0; i < count; i++) {
                const x = Math.random() * width;
                const y = Math.random() * height;
                const rotation = Math.random() * 360;
                const scale = 0.5 + Math.random() * 1.5; // Random size between 0.5x and 2x
                const color = Math.random() > 0.5 ? color1 : color2;
                
                // Cross path: center at 0,0, length 20, rounded ends
                svgContent += `<g transform="translate(${x}, ${y}) rotate(${rotation}) scale(${scale})">
                    <path d="M-10,0 L10,0 M0,-10 L0,10" stroke="${color}" stroke-width="4" stroke-linecap="round" />
                </g>`;
            }

            const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid slice">
                ${svgContent}
            </svg>`;
            
            const encodedSvg = encodeURIComponent(svg);
            document.getElementById('bg-decorations').style.backgroundImage = `url("data:image/svg+xml,${encodedSvg}")`;
        }

        function applyCustomTheme() {
            const root = document.documentElement;
            const state = getCurrentThemeState();
            
            root.style.setProperty('--bg-page', state.bg);
            root.style.setProperty('--calc-bg', state.calc);
            root.style.setProperty('--key-bg', state.key);
            root.style.setProperty('--text-main', state.text);
            root.style.setProperty('--accent', state.accent);
            root.style.setProperty('--clear-key', state.clear);
            root.style.setProperty('--radius', state.radius + 'px');
            
            // Apply Graph colors
            root.style.setProperty('--graph-line', state.graphLine);
            root.style.setProperty('--graph-bg', state.graphBg);
            root.style.setProperty('--graph-grid', state.graphGrid);
            
            // Apply Cross colors
            root.style.setProperty('--cross-color-1', state.cross1);
            root.style.setProperty('--cross-color-2', state.cross2);

            document.getElementById('radiusVal').textContent = state.radius + 'px';
            
            root.style.setProperty('--display-bg', state.key);
            root.style.setProperty('--key-border', '#cccccc');
            root.style.setProperty('--text-muted', '#888888');

            generateBackgroundDecorations();

            if (currentMode === 'graphing') plotGraph();
            if (currentMode === 'trig') solveTriangle('btn');
        }

        function commitThemeChange() {
            const current = getCurrentThemeState();
            if (JSON.stringify(lastCommittedState) !== JSON.stringify(current)) {
                if (themeHistory.length >= maxHistory) themeHistory.shift();
                themeHistory.push(lastCommittedState);
                lastCommittedState = current;
                document.getElementById('undoBtn').disabled = false;
            }
        }

        function undoTheme() {
            if (themeHistory.length > 0) {
                const prevState = themeHistory.pop();
                applyThemeState(prevState);
                lastCommittedState = prevState; 
                if (themeHistory.length === 0) {
                    document.getElementById('undoBtn').disabled = true;
                }
            }
        }

        function saveTheme() {
            const state = getCurrentThemeState();
            localStorage.setItem('calculatorCustomTheme', JSON.stringify(state));
            alert("Theme saved successfully! It will load automatically next time.");
        }

        function resetTheme() {
            localStorage.removeItem('calculatorCustomTheme');
            themeHistory = [];
            lastCommittedState = { ...defaultCustomTheme };
            applyThemeState(defaultCustomTheme);
            document.getElementById('undoBtn').disabled = true;
        }

        function loadSavedTheme() {
            const saved = localStorage.getItem('calculatorCustomTheme');
            if (saved) {
                try {
                    const state = JSON.parse(saved);
                    applyThemeState(state);
                    lastCommittedState = state;
                    document.getElementById('themeSelect').value = 'custom';
                    document.getElementById('customPanel').style.display = 'grid';
                } catch (e) {
                    console.error("Failed to load saved theme", e);
                }
            }
        }

        // --- Theme Selector Logic ---
        function changeTheme(theme) {
            const root = document.documentElement;
            const panel = document.getElementById('customPanel');
            
            if (theme === 'light') {
                document.body.classList.remove('dark-theme');
                panel.style.display = 'none';
                root.style.cssText = '';
                generateBackgroundDecorations(); // Regenerate with light defaults
            } else if (theme === 'dark') {
                document.body.classList.add('dark-theme');
                panel.style.display = 'none';
                root.style.cssText = '';
                // Wait a tiny bit for class to apply then regen
                setTimeout(generateBackgroundDecorations, 10); 
            } else if (theme === 'custom') {
                document.body.classList.remove('dark-theme');
                panel.style.display = 'grid';
                loadSavedTheme();
                applyCustomTheme();
                animateElement(panel, 'fadeInDown');
            }
            
            if (currentMode === 'graphing') plotGraph();
            if (currentMode === 'trig') solveTriangle('btn');
        }

        // --- Enhanced Keyboard Support ---
        document.addEventListener('keydown', (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
            if (currentMode === 'graphing' || currentMode === 'trig') return;

            const key = e.key;

            if (key === 'Enter') {
                e.preventDefault();
                if (currentMode === 'algebra') {
                    addEquationLine();
                } else {
                    calculateStandard();
                }
                return;
            }

            if (key === '=') {
                e.preventDefault();
                if (currentMode === 'standard') {
                    calculateStandard();
                } else {
                    insert('=');
                }
                return;
            }

            if (key === 'Backspace') {
                e.preventDefault();
                backspace();
                return;
            }

            if (key === 'Escape') {
                e.preventDefault();
                clearAll();
                return;
            }

            if (/^[0-9+\-*/().^xyzXYZkK]$/.test(key)) {
                e.preventDefault();
                insert(key.toLowerCase());
            }
        });

        // Attach animations to dropdowns
        document.querySelectorAll('details').forEach(detail => {
            detail.addEventListener('toggle', () => {
                if (detail.open) {
                    const content = detail.querySelector('.panel-content') || detail.querySelector('.conv-grid') || detail.querySelector('.util-grid');
                    if (content) {
                        animateElement(content, 'fadeInDown');
                    } else {
                        animateElement(detail, 'pulse');
                    }
                }
            });
        });

        // Initial setup
        loadSavedTheme();
        lastCommittedState = getCurrentThemeState();
        generateBackgroundDecorations(); // Draw initial background
        resizeCanvas();
        resizeTrigCanvas();

        // Typed.js animation on init
        const typed = new Typed('#expression', {
            strings: ['Welcome to the customizable simple calculator!', 'Type an equation...', 'Press = to calculate.'],
            typeSpeed: 40,
            backSpeed: 20,
            backDelay: 1500,
            loop: false,
            onComplete: function() {
                document.getElementById('expression').textContent = ''; // Clear after animation
            }
        });

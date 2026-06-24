// 学校数据
const schoolsData = [
    {
        id: 1,
        name: "清华大学",
        region: "北京",
        type: "理工",
        level: "985/211/双一流",
        description: "中国顶尖的综合性研究型大学，以工科见长，在计算机、建筑、机械等领域享有盛誉。",
        features: ["工科强势", "科研实力雄厚", "国际影响力大"],
        website: "https://www.tsinghua.edu.cn"
    },
    {
        id: 2,
        name: "北京大学",
        region: "北京",
        type: "综合",
        level: "985/211/双一流",
        description: "中国最著名的综合性大学之一，文理医工全面发展，人文社科和基础科学领域尤为突出。",
        features: ["文科强势", "医学优秀", "基础研究领先"],
        website: "https://www.pku.edu.cn"
    },
    {
        id: 3,
        name: "复旦大学",
        region: "上海",
        type: "综合",
        level: "985/211/双一流",
        description: "位于上海的著名综合性大学，在经济管理、新闻传播、医学等领域具有显著优势。",
        features: ["地处上海", "经管类强校", "国际化程度高"],
        website: "https://www.fudan.edu.cn"
    },
    {
        id: 4,
        name: "上海交通大学",
        region: "上海",
        type: "理工",
        level: "985/211/双一流",
        description: "中国历史最悠久的高等学府之一，以工科和医学为主要特色，船舶海洋工程全国第一。",
        features: ["工科优秀", "医学强劲", "创新创业氛围浓"],
        website: "https://www.sjtu.edu.cn"
    },
    {
        id: 5,
        name: "浙江大学",
        region: "浙江",
        type: "综合",
        level: "985/211/双一流",
        description: "位于杭州的综合性研究型大学，学科门类齐全，工学、农学、管理学实力强劲。",
        features: ["学科全面", "创新创业活跃", "地处长三角"],
        website: "https://www.zju.edu.cn"
    },
    {
        id: 6,
        name: "南京大学",
        region: "江苏",
        type: "综合",
        level: "985/211/双一流",
        description: "历史悠久的高等学府，以文理基础学科见长，物理学、天文学、地质学等学科国内领先。",
        features: ["基础学科强", "学术氛围浓厚", "文化底蕴深"],
        website: "https://www.nju.edu.cn"
    },
    {
        id: 7,
        name: "中山大学",
        region: "广东",
        type: "综合",
        level: "985/211/双一流",
        description: "华南地区最高学府，文理医工全面发展，医学和管理学尤为突出。",
        features: ["华南第一校", "医学优秀", "毗邻港澳"],
        website: "https://www.sysu.edu.cn"
    },
    {
        id: 8,
        name: "武汉大学",
        region: "湖北",
        type: "综合",
        level: "985/211/双一流",
        description: "位于武汉的著名综合性大学，法学、测绘科学、图书情报等学科全国领先。",
        features: ["校园优美", "法学强势", "测绘科学一流"],
        website: "https://www.whu.edu.cn"
    },
    {
        id: 9,
        name: "四川大学",
        region: "四川",
        type: "综合",
        level: "985/211/双一流",
        description: "西南地区重要的高等学府，医学、口腔医学、材料科学等学科具有明显优势。",
        features: ["西南重镇", "口腔医学第一", "学科门类全"],
        website: "https://www.scu.edu.cn"
    },
    {
        id: 10,
        name: "西安交通大学",
        region: "陕西",
        type: "理工",
        level: "985/211/双一流",
        description: "西北地区最重要的工科大学，电气工程、机械工程、管理等学科实力雄厚。",
        features: ["西北龙头", "工科传统强", "管理学科优秀"],
        website: "https://www.xjtu.edu.cn"
    },
    {
        id: 11,
        name: "北京师范大学",
        region: "北京",
        type: "师范",
        level: "985/211/双一流",
        description: "中国师范教育的最高学府，教育学、心理学、中国语言文学等学科全国领先。",
        features: ["师范第一校", "教育学科强", "人文社科优"],
        website: "https://www.bnu.edu.cn"
    },
    {
        id: 12,
        name: "北京协和医学院",
        region: "北京",
        type: "医药",
        level: "211/双一流",
        description: "中国医学教育的殿堂，临床医学、基础医学等学科国内顶尖。",
        features: ["医学殿堂", "临床实力强", "科研水平高"],
        website: "https://www.pumc.edu.cn"
    },
    {
        id: 13,
        name: "上海财经大学",
        region: "上海",
        type: "财经",
        level: "211/双一流",
        description: "中国财经领域的顶尖高校，会计学、金融学、经济学等学科实力强劲。",
        features: ["财经名校", "就业率高", "地处金融中心"],
        website: "https://www.sufe.edu.cn"
    },
    {
        id: 14,
        name: "同济大学",
        region: "上海",
        type: "理工",
        level: "985/211/双一流",
        description: "以土木建筑闻名的综合性大学，土木工程、建筑学、城乡规划等学科全国领先。",
        features: ["土木建筑强", "德式传统", "上海国际视野"],
        website: "https://www.tongji.edu.cn"
    },
    {
        id: 15,
        name: "华中科技大学",
        region: "湖北",
        type: "理工",
        level: "985/211/双一流",
        description: "中部地区的工科强校，机械工程、光学工程、生物医学工程等学科优势明显。",
        features: ["工科扎实", "光电特色", "创新能力强"],
        website: "https://www.hust.edu.cn"
    }
];

// 专业数据
const majorsData = [
    {
        id: 1,
        name: "计算机科学与技术",
        category: "工学",
        degree: "四年/本科",
        description: "研究计算机硬件、软件及应用技术的综合性学科。",
        courses: ["数据结构", "算法设计", "操作系统", "计算机网络", "数据库原理", "人工智能"],
       就业前景: "互联网企业、软件开发公司、科研院所、政府机关等，从事软件开发、系统设计、数据分析等工作。",
        salary: "8000-25000元/月",
        trend: "需求量大，薪资水平高，发展前景好"
    },
    {
        id: 2,
        name: "临床医学",
        category: "医学",
        degree: "五年/本科",
        description: "培养具备基础医学、临床医学基本理论和技能的医学人才。",
        courses: ["人体解剖学", "生理学", "病理学", "药理学", "诊断学", "内科学", "外科学"],
       就业前景: "各级医院、疾控中心、医学院校等，从事临床诊疗、预防保健、医学教育等工作。",
        salary: "6000-20000元/月",
        trend: "社会需求稳定，职业寿命长，社会地位高"
    },
    {
        id: 3,
        name: "金融学",
        category: "经济学",
        degree: "四年/本科",
        description: "研究货币、银行、证券、保险等金融活动的学科。",
        courses: ["微观经济学", "宏观经济学", "货币银行学", "证券投资学", "国际金融", "金融工程"],
       就业前景: "银行、证券公司、保险公司、投资机构等，从事金融分析、投资管理、风险控制等工作。",
        salary: "7000-30000元/月",
        trend: "金融行业核心专业，薪资待遇优厚，竞争激烈"
    },
    {
        id: 4,
        name: "汉语言文学",
        category: "文学",
        degree: "四年/本科",
        description: "研究汉语语言文字和中国文学的学科。",
        courses: ["古代汉语", "现代汉语", "中国古代文学", "中国现当代文学", "外国文学", "文学理论"],
       就业前景: "教育机构、出版社、媒体、文化机构、政府机关等，从事教学、编辑、文案策划等工作。",
        salary: "5000-15000元/月",
        trend: "传统文化复兴，教育行业需求稳定"
    },
    {
        id: 5,
        name: "法学",
        category: "法学",
        degree: "四年/本科",
        description: "研究法律现象及其发展规律的社会科学。",
        courses: ["法理学", "宪法学", "民法学", "刑法学", "行政法学", "诉讼法学", "经济法学"],
       就业前景: "律师事务所、法院、检察院、企业法务部门等，从事律师、法官、检察官、法务等工作。",
        salary: "6000-25000元/月",
        trend: "法治建设推进，法律服务需求增长"
    },
    {
        id: 6,
        name: "机械设计制造及其自动化",
        category: "工学",
        degree: "四年/本科",
        description: "研究机械产品设计、制造及自动化控制的学科。",
        courses: ["机械制图", "理论力学", "材料力学", "机械原理", "机械制造技术", "数控技术"],
       就业前景: "机械制造企业、汽车企业、航空航天企业等，从事机械设计、制造工艺、设备维护等工作。",
        salary: "6000-18000元/月",
        trend: "制造业升级，智能制造人才需求增加"
    },
    {
        id: 7,
        name: "工商管理",
        category: "管理学",
        degree: "四年/本科",
        description: "研究工商企业经营管理活动规律的学科。",
        courses: ["管理学原理", "市场营销学", "人力资源管理", "财务管理", "战略管理", "运营管理"],
       就业前景: "各类企业、咨询公司、政府部门等，从事企业管理、市场策划、人力资源等工作。",
        salary: "6000-20000元/月",
        trend: "企业管理规范化，专业人才需求广泛"
    },
    {
        id: 8,
        name: "数学与应用数学",
        category: "理学",
        degree: "四年/本科",
        description: "研究数量关系和空间形式的科学。",
        courses: ["数学分析", "高等代数", "解析几何", "概率论", "数理统计", "常微分方程"],
       就业前景: "教育机构、金融机构、IT企业、科研院所等，从事教学、数据分析、算法研究等工作。",
        salary: "6000-20000元/月",
        trend: "大数据时代，数学人才应用广泛"
    },
    {
        id: 9,
        name: "英语",
        category: "文学",
        degree: "四年/本科",
        description: "研究英语语言、文学及跨文化交流的学科。",
        courses: ["综合英语", "英语听力", "英语口语", "英语写作", "英美文学", "翻译理论与实践"],
       就业前景: "外贸企业、教育机构、翻译公司、涉外部门等，从事翻译、教学、外贸等工作。",
        salary: "5000-18000元/月",
        trend: "国际化进程加速，外语人才需求持续"
    },
    {
        id: 10,
        name: "教育学",
        category: "教育学",
        degree: "四年/本科",
        description: "研究教育现象和教育问题，揭示教育规律的科学。",
        courses: ["教育学原理", "教育心理学", "课程与教学论", "教育统计学", "中外教育史"],
       就业前景: "学校、教育培训机构、教育行政部门等，从事教学、教育管理、教育研究等工作。",
        salary: "5000-15000元/月",
        trend: "教育重视程度提高，教师待遇改善"
    },
    {
        id: 11,
        name: "电子信息工程",
        category: "工学",
        degree: "四年/本科",
        description: "研究电子技术和信息系统的学科。",
        courses: ["电路分析", "模拟电子技术", "数字电子技术", "信号与系统", "通信原理", "嵌入式系统"],
       就业前景: "电子企业、通信公司、科研院所等，从事电子产品研发、通信系统设计等工作。",
        salary: "7000-22000元/月",
        trend: "5G、物联网发展，电子信息人才紧缺"
    },
    {
        id: 12,
        name: "会计学",
        category: "管理学",
        degree: "四年/本科",
        description: "研究会计理论和实务的学科。",
        courses: ["基础会计", "财务会计", "成本会计", "管理会计", "审计学", "税法"],
       就业前景: "企业财务部门、会计师事务所、税务机关等，从事会计核算、审计、税务等工作。",
        salary: "5000-18000元/月",
        trend: "企业刚需，职业发展路径清晰"
    }
];

// 分数线数据
const scoresData = [
    { schoolId: 1, schoolName: "清华大学", year: 2023, batch: "本科一批", science: 686, arts: 668 },
    { schoolId: 1, schoolName: "清华大学", year: 2022, batch: "本科一批", science: 681, arts: 665 },
    { schoolId: 1, schoolName: "清华大学", year: 2021, batch: "本科一批", science: 679, arts: 662 },
    { schoolId: 1, schoolName: "清华大学", year: 2020, batch: "本科一批", science: 676, arts: 659 },
    
    { schoolId: 2, schoolName: "北京大学", year: 2023, batch: "本科一批", science: 684, arts: 666 },
    { schoolId: 2, schoolName: "北京大学", year: 2022, batch: "本科一批", science: 679, arts: 663 },
    { schoolId: 2, schoolName: "北京大学", year: 2021, batch: "本科一批", science: 677, arts: 660 },
    { schoolId: 2, schoolName: "北京大学", year: 2020, batch: "本科一批", science: 674, arts: 657 },
    
    { schoolId: 3, schoolName: "复旦大学", year: 2023, batch: "本科一批", science: 672, arts: 655 },
    { schoolId: 3, schoolName: "复旦大学", year: 2022, batch: "本科一批", science: 668, arts: 652 },
    { schoolId: 3, schoolName: "复旦大学", year: 2021, batch: "本科一批", science: 665, arts: 649 },
    { schoolId: 3, schoolName: "复旦大学", year: 2020, batch: "本科一批", science: 662, arts: 646 },
    
    { schoolId: 4, schoolName: "上海交通大学", year: 2023, batch: "本科一批", science: 670, arts: 653 },
    { schoolId: 4, schoolName: "上海交通大学", year: 2022, batch: "本科一批", science: 666, arts: 650 },
    { schoolId: 4, schoolName: "上海交通大学", year: 2021, batch: "本科一批", science: 663, arts: 647 },
    { schoolId: 4, schoolName: "上海交通大学", year: 2020, batch: "本科一批", science: 660, arts: 644 },
    
    { schoolId: 5, schoolName: "浙江大学", year: 2023, batch: "本科一批", science: 665, arts: 650 },
    { schoolId: 5, schoolName: "浙江大学", year: 2022, batch: "本科一批", science: 661, arts: 647 },
    { schoolId: 5, schoolName: "浙江大学", year: 2021, batch: "本科一批", science: 658, arts: 644 },
    { schoolId: 5, schoolName: "浙江大学", year: 2020, batch: "本科一批", science: 655, arts: 641 },
    
    { schoolId: 6, schoolName: "南京大学", year: 2023, batch: "本科一批", science: 660, arts: 648 },
    { schoolId: 6, schoolName: "南京大学", year: 2022, batch: "本科一批", science: 656, arts: 645 },
    { schoolId: 6, schoolName: "南京大学", year: 2021, batch: "本科一批", science: 653, arts: 642 },
    { schoolId: 6, schoolName: "南京大学", year: 2020, batch: "本科一批", science: 650, arts: 639 },
    
    { schoolId: 7, schoolName: "中山大学", year: 2023, batch: "本科一批", science: 645, arts: 635 },
    { schoolId: 7, schoolName: "中山大学", year: 2022, batch: "本科一批", science: 641, arts: 632 },
    { schoolId: 7, schoolName: "中山大学", year: 2021, batch: "本科一批", science: 638, arts: 629 },
    { schoolId: 7, schoolName: "中山大学", year: 2020, batch: "本科一批", science: 635, arts: 626 },
    
    { schoolId: 8, schoolName: "武汉大学", year: 2023, batch: "本科一批", science: 642, arts: 633 },
    { schoolId: 8, schoolName: "武汉大学", year: 2022, batch: "本科一批", science: 638, arts: 630 },
    { schoolId: 8, schoolName: "武汉大学", year: 2021, batch: "本科一批", science: 635, arts: 627 },
    { schoolId: 8, schoolName: "武汉大学", year: 2020, batch: "本科一批", science: 632, arts: 624 },
    
    { schoolId: 9, schoolName: "四川大学", year: 2023, batch: "本科一批", science: 638, arts: 630 },
    { schoolId: 9, schoolName: "四川大学", year: 2022, batch: "本科一批", science: 634, arts: 627 },
    { schoolId: 9, schoolName: "四川大学", year: 2021, batch: "本科一批", science: 631, arts: 624 },
    { schoolId: 9, schoolName: "四川大学", year: 2020, batch: "本科一批", science: 628, arts: 621 },
    
    { schoolId: 10, schoolName: "西安交通大学", year: 2023, batch: "本科一批", science: 635, arts: 625 },
    { schoolId: 10, schoolName: "西安交通大学", year: 2022, batch: "本科一批", science: 631, arts: 622 },
    { schoolId: 10, schoolName: "西安交通大学", year: 2021, batch: "本科一批", science: 628, arts: 619 },
    { schoolId: 10, schoolName: "西安交通大学", year: 2020, batch: "本科一批", science: 625, arts: 616 },
    
    { schoolId: 11, schoolName: "北京师范大学", year: 2023, batch: "本科一批", science: 630, arts: 628 },
    { schoolId: 11, schoolName: "北京师范大学", year: 2022, batch: "本科一批", science: 626, arts: 625 },
    { schoolId: 11, schoolName: "北京师范大学", year: 2021, batch: "本科一批", science: 623, arts: 622 },
    { schoolId: 11, schoolName: "北京师范大学", year: 2020, batch: "本科一批", science: 620, arts: 619 },
    
    { schoolId: 12, schoolName: "北京协和医学院", year: 2023, batch: "本科一批", science: 668, arts: 0 },
    { schoolId: 12, schoolName: "北京协和医学院", year: 2022, batch: "本科一批", science: 664, arts: 0 },
    { schoolId: 12, schoolName: "北京协和医学院", year: 2021, batch: "本科一批", science: 661, arts: 0 },
    { schoolId: 12, schoolName: "北京协和医学院", year: 2020, batch: "本科一批", science: 658, arts: 0 },
    
    { schoolId: 13, schoolName: "上海财经大学", year: 2023, batch: "本科一批", science: 655, arts: 645 },
    { schoolId: 13, schoolName: "上海财经大学", year: 2022, batch: "本科一批", science: 651, arts: 642 },
    { schoolId: 13, schoolName: "上海财经大学", year: 2021, batch: "本科一批", science: 648, arts: 639 },
    { schoolId: 13, schoolName: "上海财经大学", year: 2020, batch: "本科一批", science: 645, arts: 636 },
    
    { schoolId: 14, schoolName: "同济大学", year: 2023, batch: "本科一批", science: 662, arts: 648 },
    { schoolId: 14, schoolName: "同济大学", year: 2022, batch: "本科一批", science: 658, arts: 645 },
    { schoolId: 14, schoolName: "同济大学", year: 2021, batch: "本科一批", science: 655, arts: 642 },
    { schoolId: 14, schoolName: "同济大学", year: 2020, batch: "本科一批", science: 652, arts: 639 },
    
    { schoolId: 15, schoolName: "华中科技大学", year: 2023, batch: "本科一批", science: 648, arts: 635 },
    { schoolId: 15, schoolName: "华中科技大学", year: 2022, batch: "本科一批", science: 644, arts: 632 },
    { schoolId: 15, schoolName: "华中科技大学", year: 2021, batch: "本科一批", science: 641, arts: 629 },
    { schoolId: 15, schoolName: "华中科技大学", year: 2020, batch: "本科一批", science: 638, arts: 626 }
];

// 页面导航
function navigateTo(pageId) {
    // 隐藏所有页面
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // 显示目标页面
    document.getElementById(`${pageId}-page`).classList.add('active');
    
    // 更新导航按钮状态
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-page="${pageId}"]`).classList.add('active');
    
    // 加载对应数据
    if (pageId === 'schools') {
        loadSchools();
    } else if (pageId === 'majors') {
        loadMajors();
    } else if (pageId === 'scores') {
        loadScores();
    }
}

// 快速搜索
function quickSearch() {
    const query = document.getElementById('quick-search-input').value.trim().toLowerCase();
    if (!query) return;
    
    // 在学校中搜索
    const schoolMatch = schoolsData.find(school => 
        school.name.toLowerCase().includes(query) ||
        school.description.toLowerCase().includes(query)
    );
    
    if (schoolMatch) {
        navigateTo('schools');
        setTimeout(() => {
            document.getElementById('school-search').value = schoolMatch.name;
            filterSchools();
        }, 100);
        return;
    }
    
    // 在专业中搜索
    const majorMatch = majorsData.find(major => 
        major.name.toLowerCase().includes(query) ||
        major.description.toLowerCase().includes(query)
    );
    
    if (majorMatch) {
        navigateTo('majors');
        setTimeout(() => {
            document.getElementById('major-search').value = majorMatch.name;
            filterMajors();
        }, 100);
        return;
    }
    
    alert('未找到相关结果，请尝试其他关键词');
}

// 加载学校列表
function loadSchools() {
    const container = document.getElementById('schools-list');
    container.innerHTML = '<div class="loading">正在加载学校数据</div>';
    
    setTimeout(() => {
        renderSchools(schoolsData);
    }, 300);
}

// 渲染学校卡片
function renderSchools(schools) {
    const container = document.getElementById('schools-list');
    
    if (schools.length === 0) {
        container.innerHTML = '<div class="no-results">没有找到匹配的学校</div>';
        return;
    }
    
    container.innerHTML = schools.map(school => `
        <div class="result-card">
            <h3>${school.name}</h3>
            <div class="meta-info">
                <span class="tag primary">${school.region}</span>
                <span class="tag">${school.type}</span>
                <span class="tag">${school.level}</span>
            </div>
            <p>${school.description}</p>
            <button class="detail-btn" onclick="showSchoolDetail(${school.id})">查看详情</button>
        </div>
    `).join('');
}

// 筛选学校
function filterSchools() {
    const searchTerm = document.getElementById('school-search').value.toLowerCase();
    const region = document.getElementById('school-region').value;
    const type = document.getElementById('school-type').value;
    
    const filtered = schoolsData.filter(school => {
        const matchSearch = school.name.toLowerCase().includes(searchTerm) ||
                           school.description.toLowerCase().includes(searchTerm);
        const matchRegion = !region || school.region === region;
        const matchType = !type || school.type === type;
        
        return matchSearch && matchRegion && matchType;
    });
    
    renderSchools(filtered);
}

// 显示学校详情
function showSchoolDetail(schoolId) {
    const school = schoolsData.find(s => s.id === schoolId);
    if (!school) return;
    
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <h2 style="color: #667eea; margin-bottom: 20px;">${school.name}</h2>
        <div style="margin-bottom: 20px;">
            <p><strong>所在地区：</strong>${school.region}</p>
            <p><strong>学校类型：</strong>${school.type}</p>
            <p><strong>学校层次：</strong>${school.level}</p>
        </div>
        <div style="margin-bottom: 20px;">
            <h3 style="color: #667eea; margin-bottom: 10px;">学校简介</h3>
            <p style="line-height: 1.8;">${school.description}</p>
        </div>
        <div style="margin-bottom: 20px;">
            <h3 style="color: #667eea; margin-bottom: 10px;">办学特色</h3>
            <ul style="line-height: 2;">
                ${school.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
        </div>
        <div>
            <a href="${school.website}" target="_blank" class="detail-btn" style="display: inline-block; text-decoration: none;">访问学校官网</a>
        </div>
    `;
    
    document.getElementById('modal').style.display = 'block';
}

// 加载专业列表
function loadMajors() {
    const container = document.getElementById('majors-list');
    container.innerHTML = '<div class="loading">正在加载专业数据</div>';
    
    setTimeout(() => {
        renderMajors(majorsData);
    }, 300);
}

// 渲染专业卡片
function renderMajors(majors) {
    const container = document.getElementById('majors-list');
    
    if (majors.length === 0) {
        container.innerHTML = '<div class="no-results">没有找到匹配的专业</div>';
        return;
    }
    
    container.innerHTML = majors.map(major => `
        <div class="result-card">
            <h3>${major.name}</h3>
            <div class="meta-info">
                <span class="tag primary">${major.category}</span>
                <span class="tag">${major.degree}</span>
            </div>
            <p>${major.description}</p>
            <button class="detail-btn" onclick="showMajorDetail(${major.id})">查看详情</button>
        </div>
    `).join('');
}

// 筛选专业
function filterMajors() {
    const searchTerm = document.getElementById('major-search').value.toLowerCase();
    const category = document.getElementById('major-category').value;
    
    const filtered = majorsData.filter(major => {
        const matchSearch = major.name.toLowerCase().includes(searchTerm) ||
                           major.description.toLowerCase().includes(searchTerm);
        const matchCategory = !category || major.category === category;
        
        return matchSearch && matchCategory;
    });
    
    renderMajors(filtered);
}

// 显示专业详情
function showMajorDetail(majorId) {
    const major = majorsData.find(m => m.id === majorId);
    if (!major) return;
    
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <h2 style="color: #667eea; margin-bottom: 20px;">${major.name}</h2>
        <div style="margin-bottom: 20px;">
            <p><strong>学科门类：</strong>${major.category}</p>
            <p><strong>学制学位：</strong>${major.degree}</p>
        </div>
        <div style="margin-bottom: 20px;">
            <h3 style="color: #667eea; margin-bottom: 10px;">专业介绍</h3>
            <p style="line-height: 1.8;">${major.description}</p>
        </div>
        <div style="margin-bottom: 20px;">
            <h3 style="color: #667eea; margin-bottom: 10px;">主要课程</h3>
            <ul style="line-height: 2;">
                ${major.courses.map(c => `<li>${c}</li>`).join('')}
            </ul>
        </div>
        <div style="margin-bottom: 20px;">
            <h3 style="color: #667eea; margin-bottom: 10px;">就业前景</h3>
            <p style="line-height: 1.8;">${major.就业前景}</p>
        </div>
        <div style="margin-bottom: 20px;">
            <h3 style="color: #667eea; margin-bottom: 10px;">薪资水平</h3>
            <p style="font-size: 1.2rem; color: #667eea; font-weight: bold;">${major.salary}</p>
        </div>
        <div>
            <h3 style="color: #667eea; margin-bottom: 10px;">发展趋势</h3>
            <p style="line-height: 1.8;">${major.trend}</p>
        </div>
    `;
    
    document.getElementById('modal').style.display = 'block';
}

// 加载分数线数据
function loadScores() {
    const container = document.getElementById('scores-list');
    container.innerHTML = '<div class="loading">正在加载分数线数据</div>';
    
    setTimeout(() => {
        renderScores(scoresData);
    }, 300);
}

// 渲染分数线表格
function renderScores(scores) {
    const container = document.getElementById('scores-list');
    
    if (scores.length === 0) {
        container.innerHTML = '<div class="no-results">没有找到匹配的分数线数据</div>';
        return;
    }
    
    // 按学校和年份分组
    const grouped = {};
    scores.forEach(score => {
        const key = `${score.schoolId}-${score.year}`;
        if (!grouped[key]) {
            grouped[key] = {
                schoolId: score.schoolId,
                schoolName: score.schoolName,
                year: score.year,
                batch: score.batch,
                science: score.science,
                arts: score.arts
            };
        }
    });
    
    const sortedScores = Object.values(grouped).sort((a, b) => {
        if (a.schoolName !== b.schoolName) {
            return a.schoolName.localeCompare(b.schoolName);
        }
        return b.year - a.year;
    });
    
    container.innerHTML = `
        <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 10px; overflow: hidden;">
            <thead style="background: #667eea; color: white;">
                <tr>
                    <th style="padding: 15px; text-align: left;">学校名称</th>
                    <th style="padding: 15px;">年份</th>
                    <th style="padding: 15px;">批次</th>
                    <th style="padding: 15px;">理科分数</th>
                    <th style="padding: 15px;">文科分数</th>
                </tr>
            </thead>
            <tbody>
                ${sortedScores.map(score => `
                    <tr style="border-bottom: 1px solid #e0e0e0;">
                        <td style="padding: 15px;">${score.schoolName}</td>
                        <td style="padding: 15px; text-align: center;">${score.year}</td>
                        <td style="padding: 15px; text-align: center;">${score.batch}</td>
                        <td style="padding: 15px; text-align: center; color: ${score.science > 0 ? '#667eea' : '#999'};">
                            ${score.science > 0 ? score.science : '-'}
                        </td>
                        <td style="padding: 15px; text-align: center; color: ${score.arts > 0 ? '#667eea' : '#999'};">
                            ${score.arts > 0 ? score.arts : '-'}
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// 筛选分数线
function filterScores() {
    const searchTerm = document.getElementById('score-school-search').value.toLowerCase();
    const year = document.getElementById('score-year').value;
    const batch = document.getElementById('score-type').value;
    
    const filtered = scoresData.filter(score => {
        const matchSearch = score.schoolName.toLowerCase().includes(searchTerm);
        const matchYear = !year || score.year.toString() === year;
        const matchBatch = !batch || score.batch === batch;
        
        return matchSearch && matchYear && matchBatch;
    });
    
    renderScores(filtered);
}

// 关闭模态框
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// 点击模态框外部关闭
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// 初始化 - 加载首页
document.addEventListener('DOMContentLoaded', () => {
    // 绑定导航事件
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            navigateTo(btn.dataset.page);
        });
    });
});

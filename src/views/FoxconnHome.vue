<template>
  <div id="app">
    <div class="cover">
      <h1>富士康大学</h1>
      <br />
      <h3>成为卓越的企业大学</h3>
    </div>

    <div class="container">
      <div class="introduction">
        <h2 class="mb-5">富士康大学简介</h2>
        <div class="row mt-md-5">
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <!-- src="https://learn.foxconnedu.com/img/06.6fb3d218.jpg" -->
            <img src="@/assets/home-1.jpeg" alt="" srcset="" />
            <h3 class="mt-3">企业大学</h3>
            <p class="mt-2">
              富士康大学是富士康科技集团在国内举办并面向全球各厂区的企业大学。
              是将为企业培养输送有创新（Innovation）意识和创业（Entrepreneur）
              企图心的人才作为学院的使命，同时将富士康先进的制造技术、科研成果和前沿管理理念转化为现实生产力
              （Impactability Engineering）。
            </p>
          </div>
          <div class="col-md-4" data-aos="fade-up">
            <!-- src="https://learn.foxconnedu.com/img/05.17a22aa2.jpg" -->
            <img src="@/assets/home-2.jpeg" alt="" srcset="" />
            <h3 class="mt-3">学历教育</h3>
            <p class="mt-2">
              学院先后与清华大学、北京大学、浙江大学、西安交通大学、哈尔滨工业大学等知名院校及国内外著名专业咨询机构合作﹐
              开办150多个学历教育班﹐专业涵盖工业工程、电子与通信工程、机械工程、软体工程材料、电脑科学与技术、人力资源管理等，
              员工进校不离岗﹐不出门就能念完国内名牌大学的博士、硕士或本科、大专课程。为统筹共用教学资源﹐实现集团各厂区同步学习﹐
              自2007年开始在北京、烟台、松江、太原、昆山、杭州等19个厂区建立工业互联网学院分院。
            </p>
          </div>
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="400">
            <img
              src="https://learn.foxconnedu.com/img/img-444-1076x717.3dad680b.jpg"
              alt=""
              srcset=""
            />
            <h3 class="mt-3">管理知识与技能培训</h3>
            <p class="mt-2">
              学院定期对各级干部由上而下分层级实施集中封闭与拓展训练﹐利用长假为干部“充电”﹐
              规划干部学习新的观念、方法、技能﹐促进干部之间的了解、交流、融合﹐使新提拔干部从技术走向管理﹐增强团队建设、
              人际沟通能力﹐使资深干部增强团队战斗力、业务开创力及经营管制力﹐使高阶主管增强策略规划力、预算与危机管理力。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="fullSection">
      <h3 class="mb-4">IE技术和手法培训</h3>
      <p>
       IE (Industrial
        Engineering)知识与手法学习是富士康人的必修课﹐从干部到一线员工均参加学习﹐
        从基本改善技能和管理理念上提升学员的改善能力﹐然后辅导学员回到本职岗位进行工作改善﹐使全员在设计、制造、品管、
        物流等各方面运用IE思想去发掘、分析问题﹐运用IE手法去解决问题。其中如开展“快马加鞭”专案，对集团25,000位线组长及近200,000万现场作业人员进行IE手法培训，将IE及改善理念扎根到员工心中，运用到每个角落。
        学院建有E-learning网上学习平台﹐该平台拥有网路学院和VOD随选式两套系统，充分利用其低成本的优势﹐通过IT及数位技术﹐为学员提供“多元化”学习资源、“弹性化”学习时间、“简易化”学习介面、“人性化”学习环境。
      </p>
    </div>

    <div class="container mt-5">
      <div class="row d-flex">
        <div class="col-md-5">
          <img
            src="https://learn.foxconnedu.com/img/268283098-3070715976588314-4600483778913783228-n-1076x717.b0d5133f.jpg"
            alt=""
            srcset=""
            width="100%"
          />
        </div>
        <div
          class="col-md-6 d-flex flex-column justify-content-center"
          data-aos="fade-left"
          data-aos-duration="700"
        >
          <h4 class="mt-3 mb-2">富士康大学功能</h4>
          <p>
            具创新思维及创业企图心之人才养成
            配合留才开展学历教育，指导毕业生结合研发、生产及相关专业岗位开展研究与实验，撰写高品质论文
            关键人才管理技能及技术提升训练。干部管理技能提升训练
            配合技委会之应知应会训练
            申报建立博士后工作站，开展校企交流与合作，以暑期实习、奖教助学吸引优秀人才加入集团
            新产品/新制程/错误工程示范/提案改善摄影纪录及教育训练
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">


.cover {
  width: 100%;
  height: 100vh;
  /* background-image: url('https://images.unsplash.com/photo-1491841573634-28140fc7ced7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'); */
  background:
        /* top, transparent black, faked with gradient */ linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    /* bottom, image */
      url(https://learn.foxconnedu.com/img/bg2.2-1920x1080.a6553fc7.jpg);
  background-size: cover;
  text-align: center;
  background-attachment: fixed;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 50px;
}

.cover h1,
.cover h3 {
  color: whitesmoke;
}

.introduction {
  margin-top: 100px;
}
.introduction img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.fullSection {
  margin-top: 100px;
  margin-bottom: 100px;

  width: 100%;
  height: 60vh;
  /* background-image: url('https://images.unsplash.com/photo-1491841573634-28140fc7ced7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'); */
  background:
        /* top, transparent black, faked with gradient */ linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    /* bottom, image */
      url(https://images.unsplash.com/photo-1491841573634-28140fc7ced7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80);
  background-size: cover;
  text-align: left;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 50px;
  color: whitesmoke;
}

@media (max-width: 992px) {
  .fullSection {
    height: 90vh;
    text-align: center;
  }
}
</style>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  data() {
    return {
      imgUrl:'https://learn.foxconnedu.com/img/06.6fb3d218.jpg',
      imgUrl2:require('../assets/logo.png'),
    };
  },
  methods: {},
  mounted() {
    AOS.init();
  },
};
</script>

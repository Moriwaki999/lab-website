/* ════════════════════════════════════════════════════════════
   publications-data.js
   更新手順: researchmap.jp/moriken_stat を参照し、
   新しい論文を PUBLICATIONS_DATA の先頭に、
   新しい科研費を GRANTS_DATA の先頭に追加してください。
   index.html と publications.html の両方に自動反映されます。
════════════════════════════════════════════════════════════ */

const PUBLICATIONS_DATA = [
  // ── 2026 ──
  { year: 2026, title: "Comparative Cost-Effectiveness Analysis of Multiple First-Line Treatments for HER2-Negative Unresectable Advanced or Recurrent Gastric Cancer in Japan", authors: "Kosuke Morimoto, Kensuke Moriwaki, Yoshitaka Nishikawa, Tomomi Maeda, Mayumi Toyama, Nobukazu Agatsuma, Satomi Kojima, Takahiro Utsumi, Yoshimitsu Takahashi, Kojiro Shimozuma, Takeo Nakayama", journal: "PharmacoEconomics - Open, 2026年2月", doi: null },
  { year: 2026, title: "Cost-effectiveness analysis of low bone mass prevention in Chinese older men with excessive alcohol consumption: a modelling study.", authors: "Xihan Lin, Jinyu Liu, Lin Wang, Ting Liu, Yu Zhang, Kensuke Moriwaki, Ruxu You", journal: "BMJ Open 16(1): e095486, 2026年1月", doi: null },
  // ── 2025 ──
  { year: 2025, title: "Cost-Effectiveness of Pembrolizumab as First-Line Therapy for Advanced Colorectal Cancer With High Microsatellite Instability or Mismatched Repair Deficiency in Japan.", authors: "Seiya Taniguchi, Kensuke Moriwaki, Kosuke Morimoto, Kojiro Shimozuma", journal: "Value in Health Regional Issues 54: 101555, 2025年12月", doi: null },
  { year: 2025, title: "Cost-Effectiveness of Fracture Prevention in Postmenopausal Women With Early Breast Cancer in China.", authors: "Jin-Yu Liu, Xi-Han Lin, Yi-Han Chen, Lin Wang, Ting Liu, Yu Zhang, Takahiro Mori, Kensuke Moriwaki, Ru-Xu You", journal: "Journal of Cachexia, Sarcopenia and Muscle 16(6): e70161, 2025年12月", doi: null },
  { year: 2025, title: "Cost-effectiveness analysis of pembrolizumab plus chemotherapy versus chemotherapy as first line chemotherapy for patients with unresectable advanced esophageal cancer in Japan.", authors: "Hirohito Kakinuma, Daisuke Takada, Hisashi Itoshima, Susumu Kunisawa, Kensuke Moriwaki, Michitaka Honda, Kiyohide Fushimi, Yuichi Imanaka", journal: "Esophagus, 2025年7月", doi: null },
  // ── 2024 ──
  { year: 2024, title: "Cost-effective analysis of transcatheter aortic valve replacement in patients with severe symptomatic aortic stenosis: A prospective multicenter study.", authors: "Makoto Amaki, Kensuke Moriwaki, Michikazu Nakai, Tetsuhiro Yamano, Atsushi Okada, Hideaki Kanzaki, Masaki Izumo, Hiroki Usuku, Tetsuari Onishi, Toshiyuki Nagai, Yoshihiro Miyamoto, Tomoyuki Fujita, Hiroya Kawai, Yoshihiro Akashi, Kenichi Tsujita, Satoaki Matoba, Junjiro Kobayashi, Chisato Izumi, Toshihisa Anzai", journal: "Journal of Cardiology 83(3): 169-176, 2024年3月", doi: null },
  { year: 2024, title: "Cost-effectiveness Analysis of Nivolumab Plus Ipilimumab Combination Therapy as First-line Treatment for Advanced Renal Cell Carcinoma in Japan.", authors: "Tomomi Maeda, Kensuke Moriwaki, Kosuke Morimoto, Xiuting Mo, Takashi Yoshioka, Rei Goto, Kojiro Shimozuma", journal: "Value in Health Regional Issues 40: 118-126, 2024年1月", doi: null },
  { year: 2024, title: "2型糖尿病に対するチルゼパチドの費用対効果評価", authors: "柏 宗伸, 岩本 哲哉, 酒井 未知, 富樫 慎太郎, 森脇 健介, 森本 航輔, 白岩 健, 下妻 晃二郎, 福田 敬", journal: "Academic Technology Assessment Group (ATAG) Reports 2(5): 3-44, 2024年", doi: null },
  // ── 2023 ──
  { year: 2023, title: "Cost-effectiveness analysis of nivolumab plus chemotherapy vs chemotherapy for patients with unresectable advanced or metastatic HER2-negative gastric or gastroesophageal junction or esophageal adenocarcinoma in Japan.", authors: "Kosuke Morimoto, Kensuke Moriwaki, Kojiro Shimozuma, Takeo Nakayama", journal: "Journal of Gastroenterology, 2023年9月", doi: null },
  { year: 2023, title: "既存治療で効果不十分な尋常性乾癬患者に対するビメキズマブの費用対効果評価", authors: "酒井 未知, 此村 恵子, 森本 航輔, 森脇 健介, 柏 宗伸, 小嶋 智美, 白岩 健, 下妻 晃二郎, 福田 敬", journal: "Academic Technology Assessment Group (ATAG) Reports 1(3): 3-69, 2023年", doi: null },
  // ── 2022 ──
  { year: 2022, title: "Cost-effectiveness analysis of universal screening for biliary atresia in Japan", authors: "Eri Hoshino, Kensuke Moriwaki, Kosuke Morimoto, Kotomi Sakai, Nobuyuki Shimohata, Keiko Konomura, Kevin Y. Urayama, Mitsuyoshi Suzuki, Kojiro Shimozuma", journal: "The Journal of Pediatrics, 2022年9月", doi: null },
  { year: 2022, title: "Cost-Effectiveness of First-Line Nivolumab Plus Ipilimumab Combination Therapy in Advanced Non-Small-Cell Lung Cancer in Japan.", authors: "Xiuting Mo, Kensuke Moriwaki, Kosuke Morimoto, Kojiro Shimozuma", journal: "Clinical Drug Investigation 42(7): 599-609, 2022年7月", doi: null },
  { year: 2022, title: "Direct health care cost of treatment and medication of biliary atresia patients using the National Database of Health Insurance Claims and Specific Health Checkups.", authors: "Eri Hoshino, Keiko Konomura, Masayuki Obatake, Kensuke Moriwaki, Michi Sakai, Kevin Y. Urayama, Kojiro Shimozuma", journal: "Pediatric Surgery International 38(4): 547-554, 2022年4月", doi: null },
  { year: 2022, title: "Parathyroidectomy versus cinacalcet among patients undergoing hemodialysis.", authors: "Hirotaka Komaba, Takayuki Hamano, Naohiko Fujii, Kensuke Moriwaki, Atsushi Wada, Ikuto Masakane, Kosaku Nitta, Masafumi Fukagawa", journal: "The Journal of Clinical Endocrinology and Metabolism 107(7): 2016-2025, 2022年3月", doi: null },
  { year: 2022, title: "Cost-Effectiveness of Nab-Paclitaxel and Gemcitabine Versus Gemcitabine Monotherapy for Patients with Unresectable Metastatic Pancreatic Cancer in Japan.", authors: "Kosuke Morimoto, Kensuke Moriwaki, Takako Kaneyasu, Hitomi Nakayama, Kojiro Shimozuma", journal: "Value in Health Regional Issues 28: 54-60, 2022年3月", doi: null },
  // ── 2021 ──
  { year: 2021, title: "Proton beam therapy for children and adolescents and young adults (AYAs): JASTRO and JSPHO Guidelines.", authors: "Masashi Mizumoto, Hiroshi Fuji, Mitsuru Miyachi, Toshinori Soejima, Tetsuya Yamamoto, Norihiro Aibe, Yusuke Demizu, Hiromitsu Iwata, Takayuki Hashimoto, Atsushi Motegi, Atsufumi Kawamura, Keita Terashima, Takashi Fukushima, Tomohei Nakao, Akinori Takada, Minako Sumi, Junjiro Oshima, Kensuke Moriwaki, Miwako Nozaki, Yuji Ishida, Yoshiyuki Kosaka, Keisuke Ae, Ako Hosono, Hideyuki Harada, Etsuyo Ogo, Tetsuo Akimoto, Takashi Saito, Hiroko Fukushima, Ryoko Suzuki, Mitsuru Takahashi, Takayuki Matsuo, Akira Matsumura, Hidekazu Masaki, Hajime Hosoi, Naoyuki Shigematsu, Hideyuki Sakurai", journal: "Cancer Treatment Reviews 98: 102209, 2021年7月", doi: null },
  { year: 2021, title: "Cost-effectiveness analysis for HbA1c test intervals to screen patients with type 2 diabetes based on risk stratification.", authors: "Sachiko Ohde, Kensuke Moriwaki, Osamu Takahashi", journal: "BMC Endocrine Disorders 21(1): 105, 2021年5月", doi: null },
  { year: 2021, title: "Economic Evaluation of First-Line Pertuzumab Therapy in Patients with HER2-Positive Metastatic Breast Cancer in Japan.", authors: "Kensuke Moriwaki, Saki Uechi, Takaaki Fujiwara, Yu Hagino, Kojiro Shimozuma", journal: "PharmacoEconomics - Open 5(3): 437-447, 2021年1月", doi: null },
  { year: 2021, title: "Cost-effectiveness of a hybrid emergency room system for severe trauma: a health technology assessment from the perspective of the third-party payer in Japan.", authors: "Takahiro Kinoshita, Kensuke Moriwaki, Nao Hanaki, Tetsuhisa Kitamura, Kazuma Yamakawa, Takashi Fukuda, Myriam G M Hunink, Satoshi Fujimi", journal: "World Journal of Emergency Surgery 16(1): 2, 2021年1月", doi: null },
  // ── 2020 ──
  { year: 2020, title: "Differences in healthcare expenditure estimates according to statistical approach: A nationwide claims database study on patients with hepatocellular carcinoma", authors: "Haruhisa Fukuda, Daisuke Sato, Kensuke Moriwaki, Haku Ishida", journal: "PLOS ONE 15(8): e0237316, 2020年8月", doi: null },
  { year: 2020, title: "The relationship between preference-based health-related quality of life and lifestyle behavior: a cross-sectional study on a community sample of adults who had undergone a health check-up.", authors: "Shinichi Noto, Osamu Takahashi, Takeshi Kimura, Kensuke Moriwaki, Katsunori Masuda", journal: "Health and Quality of Life Outcomes 18(1): 267, 2020年8月", doi: null },
  { year: 2020, title: "Factors influencing the prescribed dose of opioid analgesics in cancer patients", authors: "Momoyo Hashimoto, Kazuki Aogaki, Chikako Numata, Kensuke Moriwaki, Yoshinobu Matsuda, Ryouhei Ishii, Ikuko Tanaka, Yoshiaki Okamoto", journal: "Journal of Opioid Management 16(4): 247-252, 2020年7月", doi: null },
  // ── 2019 ──
  { year: 2019, title: "Cost-effectiveness of implementing guidelines for the treatment of glucocorticoid-induced osteoporosis in Japan", authors: "K. Moriwaki, H. Fukuda", journal: "Osteoporosis International 30(2): 299-310, 2019年1月", doi: null },
  // ── 2018 ──
  { year: 2018, title: "Present developments in reaching an international consensus for a model-based approach to particle beam therapy.", authors: "Anussara Prayongrat, Kikuo Umegaki, Arjen van der Schaaf, Albert C Koong, Steven H Lin, Thomas Whitaker, Todd McNutt, Naruhiro Matsufuji, Edward Graves, Masahiko Mizuta, Kazuhiko Ogawa, Hiroyuki Date, Kensuke Moriwaki, Yoichi M Ito, Keiji Kobashi, Yasuhiro Dekura, Shinichi Shimizu, Hiroki Shirato", journal: "Journal of Radiation Research 59(Suppl 1): i72-i76, 2018年3月", doi: null },
  // ── 2017 ──
  { year: 2017, title: "Cost-effectiveness analysis of once-yearly injection of zoledronic acid for the treatment of osteoporosis in Japan", authors: "K. Moriwaki, M. Mouri, H. Hagino", journal: "Osteoporosis International 28(6): 1939-1950, 2017年6月", doi: null },
  { year: 2017, title: "Development of an Official Guideline for the Economic Evaluation of Drugs/Medical Devices in Japan", authors: "Takeru Shiroiwa, Takashi Fukuda, Shunya Ikeda, Tomoyuki Takura, Kensuke Moriwaki", journal: "Value in Health 20(3): 372-378, 2017年3月", doi: null },
];

const GRANTS_DATA = [
  { badge: "科研費", title: "EQ-HWBのスコアリングアルゴリズムの開発と費用対効果評価への応用の検討", detail: "日本学術振興会 基盤研究(B) / 2024年4月〜2028年3月" },
  { badge: "科研費", title: "効率性フロンティアに基づく医療技術の価格調整法の開発と医療経済的便益の評価", detail: "日本学術振興会 基盤研究(C) / 2023年4月〜2026年3月" },
  { badge: "科研費", title: "二次性MRに対するカテーテル修復術のレスポンダー同定と費用対効果分析", detail: "日本学術振興会 基盤研究(C) / 2020年4月〜2025年3月" },
  { badge: "科研費", title: "費用対効果を含む多様な価値基準を統合した新たな医療政策意思決定支援システムの開発", detail: "日本学術振興会 基盤研究(C) / 2020年4月〜2024年3月" },
  { badge: "科研費", title: "脳卒中のLearning Healthcare Systemに関する研究", detail: "日本学術振興会 基盤研究(B) / 2018年〜2022年" },
  { badge: "科研費", title: "粒子線治療の費用対効果評価のための標準的な手法とデータに関する研究", detail: "日本学術振興会 基盤研究(B) / 2017年〜2022年" },
  { badge: "AMED", title: "心不全患者に対して客観的心不全予後予測情報がアドバンスケアプラニングに関する導入時期・患者QOLに及ぼす影響についての探索的試験", detail: "日本医療研究開発機構 / 2019年9月〜2021年3月" },
  { badge: "AMED", title: "経カテーテル大動脈弁置換術の有効性・最適化・費用対効果を明らかにする研究", detail: "日本医療研究開発機構 / 2017年〜2020年" },
  { badge: "AMED", title: "心血管イベント一次予防戦略に用いるMRIによる非侵襲的冠動脈ハイリスクプラーク診断法の臨床的有効性の検証", detail: "日本医療研究開発機構 / 2017年〜2020年" },
  { badge: "厚労科研", title: "医療経済評価の政策応用に向けた評価手法およびデータの確立と評価体制の整備に関する研究", detail: "厚生労働省 厚生労働科学研究費補助金 / 2018年〜2019年" },
  { badge: "厚労科研", title: "医療経済評価を用いた意思決定のための標準的な分析手法および総合的評価のあり方に関する研究", detail: "厚生労働省 厚生労働科学研究費補助金 / 2017年〜2018年" },
  { badge: "科研費", title: "医療経済評価に用いる健康関連QOL値集積のための実証的研究", detail: "日本学術振興会 基盤研究(B) / 2014年〜2018年" },
  { badge: "科研費", title: "骨粗鬆症の治療戦略に関する医療経済評価研究", detail: "日本学術振興会 若手(B) / 2014年〜2017年" },
  { badge: "科研費", title: "関節リウマチに対する生物学的製剤を用いた治療戦略の医療経済評価研究", detail: "日本学術振興会 若手(B) / 2011年〜2014年" },
];

import{n as e}from"./rolldown-runtime-XKyaHtl9.js";import{n as t}from"./post-body-abstract-factory-pattern-CBXcXDrz.js";var n=e({default:()=>a}),r=t();function i(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,figcaption:`figcaption`,figure:`figure`,hr:`hr`,img:`img`,p:`p`,strong:`strong`,...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:`想要了解数据库中有多少元素和这些元素之间的关联是非常复杂的，所以我们需要一种更加直观的方式来理解这些独立元素元素是如何相互关联的，以及它们是如何合作的。这种方法就是 E-R 图。下面是一段来自百度百科🌐对 E-R 图的描述：`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsx)(t.p,{children:`E-R图也称实体-联系图(Entity Relationship Diagram)，提供了表示实体类型、属性和联系的方法，用来描述现实世界的概念模型。`}),`
`,(0,r.jsx)(t.p,{children:`用"矩形框"表示实体型，矩形框内写明实体名称；用"椭圆图框"或圆角矩形表示实体的属性，并用"实心线段"将其与相应关系的"实体型"连接起来；`}),`
`,(0,r.jsx)(t.p,{children:`用"菱形框"表示实体型之间的联系成因，在菱形框内写明联系名，并用"实心线段"分别与有关实体型连接起来，同时在"实心线段"旁标上联系的类型（1 : 1, 1 : n 或 m : n ）。`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`👉 这是一种较为老式的 E-R 图画法由 Peter Chen👨‍💻 提出。由下图所示：`}),`
`,(0,r.jsxs)(t.figure,{className:`md-figure`,children:[(0,r.jsx)(t.img,{src:`./87fc41d8017325b700b4c46f787cf9df.webp`,alt:`传统 E-R图画法`}),(0,r.jsx)(t.figcaption,{children:`传统 E-R图画法`})]}),`
`,(0,r.jsx)(t.p,{children:`如果当我们的实体属性有很多时，就会造成图上的椭圆图框太多，E-R 图也变得混乱起来。所以我们要用一种改进的 E-R 图画法。下面就来分享一下这种改进的 E-R 图画法。`}),`
`,(0,r.jsx)(t.p,{children:`👉 这是一种 Information Engineering - IE 模型，改进的 E-R 图关系如下：`}),`
`,(0,r.jsxs)(t.figure,{className:`md-figure`,children:[(0,r.jsx)(t.img,{src:`./5a438852ca1754dda16db7e995bc8380.webp`,alt:`IE 模型关系`}),(0,r.jsx)(t.figcaption,{children:`IE 模型关系`})]}),`
`,(0,r.jsx)(t.p,{children:`👉 改进的 E-R 图如下：`}),`
`,(0,r.jsxs)(t.figure,{className:`md-figure`,children:[(0,r.jsx)(t.img,{src:`./9eb5e7723b5635a2eced1fb849e406d7.webp`,alt:`改进的 E-R 图`}),(0,r.jsx)(t.figcaption,{children:`改进的 E-R 图`})]}),`
`,(0,r.jsxs)(t.p,{children:[`从上图可以得出，我们可以用 `,(0,r.jsx)(t.code,{children:`PK`}),` 标记为主键（📕特征：必须唯一、永不改变、不能为空。），`,(0,r.jsx)(t.code,{children:`FK`}),` 标记为外键。将外键和其对应的其他表的字段连接起来。不同的画图软件可能对于表的画法不同，但如果是 IE 模型，那么表与表之间的关系的画法是不变的。`]}),`
`,(0,r.jsx)(t.p,{children:`👉 对于复合主键（📕原则：使用尽可能少的属性、不要使用容易改变的属性。），我们可以按下图表示：`}),`
`,(0,r.jsxs)(t.figure,{className:`md-figure`,children:[(0,r.jsx)(t.img,{src:`./4b03c175ccee917f8116eca0bbc68e52.webp`,alt:`复合主键表示`}),(0,r.jsx)(t.figcaption,{children:`复合主键表示`})]}),`
`,(0,r.jsx)(t.p,{children:`👉 在我们需要详细构建数据表的时候，我们可以为它们指定类型，如下图所示：`}),`
`,(0,r.jsxs)(t.figure,{className:`md-figure`,children:[(0,r.jsx)(t.img,{src:`./d2ce14c1789b9d5b168a7e84b0b9fa82.webp`,alt:`指定数据类型`}),(0,r.jsx)(t.figcaption,{children:`指定数据类型`})]}),`
`,(0,r.jsx)(t.hr,{}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`📌最后：希望本文能够给您提供帮助，文章中有不懂或不正确的地方，请在下方评论区💬留言！`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`🔗参考文献：`})}),`
`,(0,r.jsxs)(t.p,{children:[`🌐 `,(0,r.jsx)(t.a,{href:`https://baike.baidu.com/item/E-R%E5%9B%BE/304954`,target:`_blank`,rel:`noopener noreferrer`,children:`E-R图 --百度百科`})]}),`
`,(0,r.jsxs)(t.p,{children:[`📺 `,(0,r.jsx)(t.a,{href:`https://www.bilibili.com/video/BV1tK411P7N2/?spm_id_from=333.1007.top_right_bar_window_default_collection.content.click&vd_source=a9a236c4d6e5c5350c70b71ee0727b8c`,target:`_blank`,rel:`noopener noreferrer`,children:`bilibili - UML ER图 part1`})]}),`
`,(0,r.jsxs)(t.p,{children:[`📺 `,(0,r.jsx)(t.a,{href:`https://www.bilibili.com/video/BV1uK411V7gz/?spm_id_from=333.788.recommend_more_video.-1&vd_source=a9a236c4d6e5c5350c70b71ee0727b8c`,target:`_blank`,rel:`noopener noreferrer`,children:`bilibili - UML ER图 part2`})]})]})}function a(e={}){let{wrapper:t}=e.components||{};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}export{n as t};
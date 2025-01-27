/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '亲爱的, 早上好',
    desc: `
      **{{date.DATA}}**
      
      下个休息日：{{holidaytts.DATA}}
      
      ---
      
      城市：{{city.DATA}}
      
      天气：{{weather.DATA}}
      
      气温(最高/最低):{{max_temperature.DATA}} / {{min_temperature.DATA}}
      
      风向: {{wind_direction.DATA}}
      
      风级: {{wind_scale.DATA}}
      
      {{comprehensive_horoscope.DATA}}
      
      ---
      
      今天是我们相识的第{{love_day.DATA}}天
      
      {{birthday_message.DATA}}
      
      ---
      
      {{moment_copyrighting.DATA}}
      
      {{poetry_title.DATA}} {{poetry_content.DATA}}
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },

 {
    id: '0003',
    title: '股票之眼',
    
    desc: `
      🗓️{{date.DATA}}
      ---

      城市：{{city.DATA}} ,
      天气：{{weather.DATA}}

      ---
      下个休息日：{{holidaytts.DATA}}
      
      ---
      沪深300(510300):  当前价格: {{510300.DATA}}   [lower_price: 3.28, higher_price: 4.23 ]

      ---
      中证500(510500):  当前价格: {{510500.DATA}}  [lower_price: 4.52, higher_price: 6.15 ]

      ---
      科创50ETF(588000):当前价格: {{588000.DATA}}   [lower_price: 0.705, higher_price:1.08 ]

      ---
      中概互联ETF(513050):当前价格:{{513050.DATA}}   [lower_price: 0.87, higher_price:1.20 ]

      ---
      恒生ETF(159920):   当前价格:{{159920.DATA}}  [lower_price: 0.96, higher_price:1.23 ]
      
      ---
      

    `
  },
  
]

module.exports = TEMPLATE_CONFIG

// append ad block into doms
/*
  How to use it ?
  var ads = [
    [text, url, vip, date],
    [text, url, vip, date]
  ];
  var dom = document.getElementById('ads');
  appendAdBlock(dom, ads)
*/
function appendAdBlock(dom, ads) {
  var html = '';
  html += '<div class="ad-block"><ul>';
  for (var i = 0; i < ads.length; i++) {
    // 超时
    if (new Date(ads[i][3]) >= new Date()) {
      html += '<li><a href="' + ads[i][1] + '" target="_blank" class="' + (ads[i][2] ? 'red': '') + '">' + ads[i][0] + '</a></li>';  
    }
  }
  html += '</ul></div>';
  dom.innerHTML = html;
};

// 加入广告
var ads = [
  ['站长的开源主页 - hustcc', 'https://github.com/hustcc', 1, '2019-12-12'],
  ['爱表情 官方网站 - aiBQ.cn', 'https://aibq.cn/', 0, '2020-01-01'],
  ['【b3qude】阿里云 vps 推荐码', 'http://www.atool.org/', 0, '2020-01-01'],
  ['笑话数据库限时特惠', 'https://item.taobao.com/item.htm?_u=snglqm18fbe&id=43742195779', 0, '2020-01-01'],
  ['笑话数据库限时特惠', 'https://item.taobao.com/item.htm?_u=snglqm18fbe&id=43742195779', 0, '2020-01-01'],
  ['广告位优惠招租(150/月)', 'http://www.atool.org/', 1, '2020-01-01'],
  ['【b3qude】阿里云 vps 推荐码', 'http://www.atool.org/', 0, '2020-01-01', '2020-01-01'],
  ['笑话数据库限时特惠', 'https://item.taobao.com/item.htm?_u=snglqm18fbe&id=43742195779', 0, '2020-01-01'],
  ['广告位优惠招租(150/月)', 'http://www.atool.org/', 1, '2020-01-01'],
  ['广告位优惠招租(150/月)', 'http://www.atool.org/', 1, '2020-01-01'],
  ['【b3qude】阿里云 vps 推荐码', 'http://www.atool.org/', 0, '2020-01-01'],
  ['笑话数据库限时特惠', 'https://item.taobao.com/item.htm?_u=snglqm18fbe&id=43742195779', 0, '2020-01-01'],
  ['广告位优惠招租(150/月)', 'http://www.atool.org/', 1, '2020-01-01'],
  ['站长的开源主页 - hustcc', 'https://github.com/hustcc', 1, '2020-01-01'],
  ['爱表情 官方网站 - aiBQ.cn', 'https://aibq.cn/', 0, '2020-01-01'],
  ['【b3qude】阿里云 vps 推荐码', 'http://www.atool.org/', 0, '2000-01-01'],
];
var dom = document.getElementById('ad-blocks');
appendAdBlock(dom, ads);
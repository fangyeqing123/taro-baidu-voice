import { Component } from 'react'
import { View, Button } from '@tarojs/components'
import './index.scss'
import Voice from '../../../W-baiduyy/W-baiduyy';

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  openVoice = () => {
    console.log('准备播报语音');
    Voice('你好，我是该插件的作者摆头方');
    Voice('欢迎使用百度语音合成接口');
    Voice('祝您生活愉快, 万事顺利！');
    Voice('谢谢！');
  }

  getAudioObject = async () => {
    console.log('准备获取音频对象')
    const audio = await Voice({
      voiceSet: {
        tex: '返回了音频对象'
      },
      returnAudio: true
    })
    console.log('获取音频对象')
    audio.onPlay(() => {
      console.log('音频开始播放了')
    })
    audio.play();
  }

  render () {
    return (
      <View className='content'>
        <View>
          <Button type='primary' onClick={this.openVoice}>播放语音</Button>
          <Button type='primary' style='margin-top: 10px;' onClick={this.getAudioObject}>获取音频对象播放</Button>
        </View>
      </View>
    )
  }
}

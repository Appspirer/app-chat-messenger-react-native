import React from "react";
import note from '../assets/svgs/note.svg'
import search from '../assets/svgs/search.svg'
import plus from '../assets/svgs/plus.svg'
import chat_gray from '../assets/svgs/chat_gray.svg'
import chat from '../assets/svgs/chat.svg'
import people_gray from '../assets/svgs/people_gray.svg'
import people from '../assets/svgs/people.svg'
import call_gray from '../assets/svgs/call_gray.svg'
import call from '../assets/svgs/call.svg'
import video from '../assets/svgs/video.svg'
import back from '../assets/svgs/back.svg'
import lock from '../assets/svgs/lock.svg'
import check from '../assets/svgs/check.svg'
import play from '../assets/svgs/Play.svg'
import voice from '../assets/svgs/voice.svg'
import like from '../assets/svgs/like.svg'
import plus_border from '../assets/svgs/plus_border.svg'
import emoji from '../assets/svgs/emoji.svg'
import sticker_store from '../assets/svgs/sticker_store.svg'

const SVGs = {
    note,
    search,
    plus,
    chat_gray,
    chat,
    people,
    people_gray,
    call_gray,
    call,
    video,
    back,
    lock,
    check,
    play,
    voice,
    like,
    plus_border,
    emoji,
    sticker_store
}

export default {
    Icons: ({ name = "", height, width }) => {
        if (name in SVGs) {
            const Icons = SVGs[name]
            return <Icons name='' width={width} height={height} />
        } else {
            return null
        }
    }
}
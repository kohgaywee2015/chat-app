<template>
<div class="chat container">
<h2 class="center teal-text">Ninja Chat {{this.name}}</h2>
	<div class="card">
		<div class="card-content">
		<ul class="messages" v-chat-scroll>
			<li v-for="message in messages" :key="message.id">
				<span class="teal-text">{{message.name}}</span>
				<span class="grey-text text-darken-3">{{message.content}}</span>
				<span class="grey-text time">{{message.timestamp}}</span>
			</li>
		</ul>
		</div>
		<div class="card-action">
			<NewMessage :name="name"/>
		</div>
	</div>
</div>
</template>

<script>
import NewMessage from '@/components/NewMessage'
import db from '@/firebase/init'
import moment from 'moment'
import Vue from 'vue'
import VueChatScroll from 'vue-chat-scroll'

Vue.use(VueChatScroll)
Vue.config.productionTip=false

export default {
	name: 'Chat',
	data() {
		return {
			messages:[]
		}
	},
	props:['name'],
	components:
	{
		NewMessage
	},
	created:
	function()
	{
		let ref = db.collection('messages');
		ref.onSnapshot(snapshot=>{
				snapshot.docChanges().forEach(
					change=>
					{
						if (change.type=='added')
						{
							let doc=change.doc
							this.messages.push({
								id:doc.id,
								name:doc.data().name,
								content:doc.data().content,
								timestamp:moment(doc.data().timestamp).format('lll')
							})
						}
					}
				)
			}
		);
	}
}
</script>

<style>
.chat h2
{
font-size:2.6em;
margin-bottom:40px;
}

.chat span
{
font-size:1.4em;
}

.chat .time
{
display:block;
font-size:1.2em;
}

.messages
{
max-height:300px;
overflow:auto;
}

.messages::-webkit-scrollbar
{
width:3px;
}

.messages::-webkit-scrollbar-track
{
background:#ddd;
}

.messages::-webkit-scrollbar-humb
{
background:#aaa;
}
</style>
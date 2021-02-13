import {delay, put, take, call, fork, takeEvery, cancel, cancelled} from 'redux-saga/effects'

function double(number) {
	return number * 2
}

export function* testSaga() {
	while(true) {
		console.log('Starting Saga')
		const state = yield take('TEST_MESSAGE')
		const a = yield call(double, 2)
		console.log(a)
		const b = yield double(3)
		console.log(b)
		console.log('Finish saga function', state)
	}
}

function* doNothing() {
	console.log('I have been called')
	yield delay(500)
	console.log("I am doing nothing")
}

export function* testSagaFork() {
	while(true) {
		yield take('TEST_MESSAGE_2')
		yield delay(1000)
		yield fork(doNothing)
		yield fork(doNothing)
		yield fork(doNothing)
		
	}
}

export function* testSagaTakeEveryProcess({payload}) {
	console.log(`Starting process for index ${payload}`)
	yield delay(3000)
	console.log(`Ending process for index ${payload}`)
}

export function* testSagaTakeEvery() {
	const {payload} = yield takeEvery("TEST_MESSAGE_3", testSagaTakeEveryProcess)
	console.log(`Finish TakeEvery for index ${payload}`)
}

function* infinitySaga() {
	console.log("starting infinate saga")
	while(true) {
		try {
			console.log('inside inifinate loop')
			yield delay(500)
		} catch(error) {
			console.error('A error happend', error)
		} finally {
			console.log('the fork was cancelled?', yield cancelled())
		}
	}
	console.log("ending infinate saga")
}

export function* testSagaCancel() {
	yield take('TEST_MESSAGE_4')
	const handleCancel = yield fork(infinitySaga)
	yield delay(3000)
	yield cancel(handleCancel)
}

export function* dispatchTest() {
	let index = 0
	yield put({type: "TEST_MESSAGE_4", payload: index})
	// while(true) {
	// 	yield delay(500)
		
	// 	index++
	// }
}
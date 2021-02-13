import {delay, put, take, call, fork} from 'redux-saga/effects'

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

export function* dispatchTest() {
	while(true) {
		yield delay(5000)
		yield put({type: "TEST_MESSAGE_2", payload: 1000})
	}
}
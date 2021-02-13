// import * as testSaga from './testSaga'

// export function initSagas(sagaMiddleware) {
// 	Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware))
// }

import * as entriesSaga from './entriesSaga'

export function initSagas(sagaMiddleware) {
	Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware))
}
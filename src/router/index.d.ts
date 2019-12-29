// Type definitions for src/router/index.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// routes.<i>

/**
 * 
 */
declare interface I {
		
	/**
	 * 
	 */
	path : string;
		
	/**
	 * 
	 */
	redirect : string;
		
	/**
	 * if (route.type === 'other') {
	 *   route.component = r => require.ensure([], () =>
	 *     r(require(`../other/${route.name}.vue`)))
	 *   return
	 * }
	 * @param r 
	 */
	component(r : any): void;
}

/**
 * 
 */
export declare var routes : Array</* .I */ any>;

/**
 * 
 * @param router 
 */
declare function addComponent(router : Array</* routes.<i> */ any>): void;

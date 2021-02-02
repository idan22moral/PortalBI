/*
** Utility functions for data normalization.
*/

/**
 * @returns {Boolean} 
 */
export function normalizeBoolean(data) {
	if (typeof(data) === "boolean")
		return data;
	return false;
}
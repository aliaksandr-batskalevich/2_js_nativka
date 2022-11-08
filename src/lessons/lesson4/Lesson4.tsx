import React from 'react'
import './lesson_4';
import {createPromiseHandler, rejectPromiseHandler, resolvePromiseHandler, universalFn} from "./lesson_4";

const Lesson4 = () => {
    return (
        <div>
            <button
                id='btn-create-promise'
                onClick={universalFn}
            >
                Create Promise
            </button>
            <button
                id='btn-resolve-promise'
                onClick={universalFn}
            >
                Resolve Promise
            </button>
            <button
                id='btn-reject-promise'
                onClick={universalFn}>
                Reject Promise
            </button>
        </div>
    );
}

export default Lesson4;
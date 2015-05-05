import React from "react";

class Profiler extends React.Component {
    startProfiling() {
        React.addons.Perf.start();
    }

    stopProfiling() {
        React.addons.Perf.stop();
        React.addons.Perf.printDOM();
    }

    render() {
        return (
            <div style={styles.container}>
                <hr />
                <button onClick={this.startProfiling}>Start profiling</button>
                <button onClick={this.stopProfiling} style={styles.stopProfilingLink}>Stop profiling</button>
            </div>
        );
    }
}

let styles = {
    container: {
        marginTop: 10
    },
    stopProfilingLink: {
        marginLeft: 5
    }
}

export default Profiler;
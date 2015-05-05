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
            <div style={{ marginTop: 10 }}>
                <hr />
                <button onClick={this.startProfiling}>Start profiling</button>
                <button onClick={this.stopProfiling} style={{ marginLeft: 5 }}>Stop profiling</button>
            </div>
        );
    }
}

export default Profiler;
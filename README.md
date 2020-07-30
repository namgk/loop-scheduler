## Problem

Given an array of elements, each with certain value.
Given a total value available to be occupied.
Given a number of loops (>1) within which the elements repeat themselves.

Schedule the elements array into this total value with the number of loops so that this total value is filled up as much as it can. Some elements can be skipped.

## Heuristic

Small elements occupy better than big ones.

## Usage

    import scheduler from 'elements-scheduler';

    const elements = []; // elements array
    const availability = 10; // available loop length for the elements to occupy
    const depth = 2; // number of loops
    const valueField = "value"; // the field to schedule upon with regard to total availability
    const idField = "id"; // element identification

    const { slots, skipped } = scheduler.schedule(elements, availability, depth, valueField, idField);


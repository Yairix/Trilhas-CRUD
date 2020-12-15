import { NumberFormatStyle } from '@angular/common';
import { HostDecorator } from '@angular/core';

export interface Task {
    id: number;
    title: string;
    description: string;
    imagen: string;
    tempo: string;
    distancia: string;
    altura: string;
    dificuldade: any;
}


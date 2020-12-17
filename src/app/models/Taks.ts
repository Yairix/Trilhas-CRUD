import { NumberFormatStyle } from '@angular/common';
import { HostDecorator } from '@angular/core';

export interface Task {
    id: number;
    title: string;
    description: string;
    imagem: any;
    tempo: string;
    distancia: string;
    altura: string;
    dificuldade: any;
}